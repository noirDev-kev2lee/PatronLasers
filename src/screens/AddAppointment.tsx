import React, {useState, useEffect} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-date-picker';
import api from '../utils/api';

export default function AddAppointment({clinicName}: {clinicName: string}) {
  const [isLoading, setLoading] = React.useState(false);
  const [pid, setPid] = useState('');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [sessionCount, SetSessionCount] = React.useState('');
  const [sessionPrice, SetSessionPrice] = React.useState('');
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [timeOpen2, setTimeOpen2] = useState(false);
  const services = ['Tatoo Removal', 'Laser Treatment', 'Skin Bleaching']; //From DB Hatibu
  const formatTime = (time: any) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  const handleSaveAppointment = async () => {
    try {
      if (
        service === '' ||
        startDate.toLocaleString() === '' ||
        endDate.toLocaleString() === '' ||
        startTime.toLocaleString() === '' ||
        endTime.toLocaleString() === '' ||
        pid === ''
      ) {
        Alert.alert('Email or password must be provided');
      } else {
        const convertedStartTime = formatTime(startTime).toLocaleString();
        const convertedEndTime = formatTime(endTime).toLocaleString();
        const convertedStartDate = startDate.toDateString();
        const convertedEndDate = endDate.toDateString();

        setLoading(true);
        await api
          .post('appointments/', {
            patient_id: pid,
            clinic_name: clinicName,
            service_type: service,
            start_date: convertedStartDate,
            start_time: convertedStartTime,
            end_date: convertedEndDate,
            end_time: convertedEndTime,
            job_status: 'pending',
            no_sessions: sessionCount,
            session_price: sessionPrice,
            active_session: 1,
          })
          .then(res => {
            const data = res.data.rows[0];
            setLoading(false);
            api.post('treatment-records/', {
              patient_id: pid,
              appt_id: data.appt_id,
              clinic_name: clinicName,
              service_type: service,
              service_cost: sessionPrice,
              session_number: 1,
            });
            Alert.alert('Appointment Registered Successfully!');
          })
          .catch(() => {
            setLoading(false);
            Alert.alert('Error occurs!');
          });
      }
    } catch (error) {
      Alert.alert('Server Error or user not found');
      setLoading(false);
    }
    //Drop-Down Variables
  };

  //Patient
  const [patientData, setPatientData] = useState<any[]>([]);
  useEffect(() => {
    api.get('patients/').then(res => setPatientData(res.data.rows));
  }, []);
  const patient_id = patientData.map(item => item.patient_id);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        style={styles.keyboard}>
        <View style={styles.form}>
          <SelectDropdown
            buttonStyle={styles.textInput}
            buttonTextStyle={styles.pressTxtDropdown}
            defaultButtonText="Patient ID"
            data={patient_id}
            searchPlaceHolder="Patient ID"
            onSelect={selectedItem => {
              setPid(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <SelectDropdown
            buttonStyle={styles.textInput}
            buttonTextStyle={styles.pressTxtDropdown}
            defaultButtonText="Service"
            data={services}
            searchPlaceHolder="Service"
            onSelect={selectedItem => {
              setService(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="gray"
            onChangeText={SetSessionCount}
            placeholder="Number of sessions"
            keyboardType="number-pad"
            maxLength={2}
            cursorColor="gray"
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="gray"
            onChangeText={SetSessionPrice}
            placeholder="Session Price"
            keyboardType="number-pad"
            cursorColor="gray"
          />
          {/* start date */}
          <Text style={styles.label}>Start date</Text>
          <View style={styles.datePickerStyle}>
            <TextInput
              style={styles.dateText}
              value={startDate.toDateString()}
              editable={false}
            />
            <Pressable style={styles.datePicker} onPress={() => setOpen(true)}>
              <Icon name="calendar" size={25} color="#000000" />
              <DatePicker
                modal
                open={open}
                date={startDate}
                onConfirm={selectedStartDate => {
                  setOpen(false);
                  setStartDate(selectedStartDate);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </Pressable>
          </View>
          {/* end date */}
          <View style={styles.datePickerStyle}>
            <TextInput
              style={styles.dateText}
              value={endDate.toDateString()}
              editable={false}
            />
            <Pressable style={styles.datePicker} onPress={() => setOpen2(true)}>
              <Icon name="calendar" size={25} color="#000000" />
              <DatePicker
                modal
                open={open2}
                date={endDate}
                onConfirm={selectedEndDate => {
                  setOpen2(false);
                  setEndDate(selectedEndDate);
                }}
                onCancel={() => {
                  setOpen2(false);
                }}
              />
            </Pressable>
          </View>
          {/* start time */}
          <View style={styles.datePickerStyle}>
            <TextInput
              style={styles.dateText}
              value={formatTime(startTime)}
              editable={false}
            />
            <Pressable
              style={styles.timePicker}
              onPress={() => setTimeOpen(true)}>
              <Icon name="clock-o" size={25} color="#000000" />
            </Pressable>
            {timeOpen && (
              <DatePicker
                style={styles.timePickerModal}
                mode="time"
                date={startTime}
                onDateChange={selectedStartTime => {
                  setTimeOpen(false);
                  setStartTime(selectedStartTime);
                }}
              />
            )}
          </View>
          {/* end time */}
          <View style={styles.datePickerStyle}>
            <TextInput
              style={styles.dateText}
              value={formatTime(endTime)}
              editable={false}
            />
            <Pressable
              style={styles.timePicker}
              onPress={() => setTimeOpen2(true)}>
              <Icon name="clock-o" size={25} color="#000000" />
            </Pressable>
            {timeOpen2 && (
              <DatePicker
                style={styles.timePickerModal}
                mode="time"
                date={endTime}
                onDateChange={selectedEndTime => {
                  setTimeOpen2(false);
                  setEndTime(selectedEndTime);
                }}
              />
            )}
          </View>
          <Pressable style={styles.pressBtn} onPress={handleSaveAppointment}>
            {isLoading ? (
              <ActivityIndicator
                color="white"
                style={styles.activityIndicator}
              />
            ) : (
              <Text style={styles.pressTxt}>Add Appointment</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  text: {
    color: '#000',
  },
  textInput: {
    fontSize: 17,
    margin: 10,
    backgroundColor: '#D9D9D9',
    paddingLeft: 20,
    width: '100%',
    height: 60,
    borderRadius: 12,
    color: 'black',
  },
  dateText: {
    marginLeft: 10,
    color: '#222',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
  inputStyle: {
    margin: 10,
    borderRadius: 12,
    width: 300,
    height: 60,
    color: '#222',
    backgroundColor: '#D9D9D9',
  },
  datePickerStyle: {
    margin: 10,
    flexDirection: 'row',
    borderRadius: 12,
    width: '100%',
    height: 60,
    color: '#222',
    backgroundColor: '#D9D9D9',
  },
  timePickerModal: {
    backgroundColor: 'black',
  },
  datePicker: {
    left: 50,
    marginTop: 15,
  },
  timePicker: {
    left: 140,
    marginTop: 15,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 50,
  },
  pressBtn: {
    alignItems: 'center',
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 300,
    height: 60,
    marginTop: 20,
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  pressTxtDropdown: {
    fontFamily: 'Inter-Regular',
    textAlign: 'left',
    padding: 10,
    fontSize: 18,
    color: 'black',
  },

  title: {
    textAlign: 'center',
    color: '#222',
    fontSize: 25,
    marginBottom: 10,
  },
  keyboard: {flex: 1, padding: 30},

  arrow: {
    color: 'white',
  },

  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,
  },
});
