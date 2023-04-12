import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function AddAppontment({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [patientID, onPatientIDChange] = React.useState('');
  const [title, onTitleChange] = React.useState('');
  const [startDate, onStartDateChange] = React.useState('');
  const [description, onDescriptionChange] = React.useState('');
  const [endDate, onEndDateChange] = React.useState('');
  const [clinicID, onClinicIDChange] = React.useState('');

  const handleAddAppointment = async () => {
    try {
      if (
        patientID === '' ||
        title === '' ||
        startDate === '' ||
        description === '' ||
        endDate === '' ||
        clinicID === ''
      ) {
        Alert.alert('All field must be provided');
      } else {
        setLoading(true);
        await axios.post('http://15.236.168.186:7000/api/v1/appointments/', {
          patient_id: patientID,
          clinic_id: clinicID,
          title: title,
          start_date: startDate,
          descriptions: description,
          end_date: endDate,
        });
        setLoading(false);
        Alert.alert('Registration Successfully!');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('An error occur');
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.select({android: undefined, ios: 'padding'})}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
        style={styles.keyboard}>
        <View style={styles.form}>
          <Text style={styles.title}>Add Appointment</Text>
          <View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onClinicIDChange}
                placeholder="Clinic ID"
                value={'text'}
                editable={false}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPatientIDChange}
                placeholder="Patient ID"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onTitleChange}
                placeholder="Appointment Title"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onDescriptionChange}
                placeholder="Description"
                placeholderTextColor={'grey'}
              />
            </View>

            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onStartDateChange}
                placeholder="Start Date"
                placeholderTextColor={'grey'}
              />
            </View>

            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onEndDateChange}
                placeholder="End Date"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <Pressable style={styles.pressBtn} onPress={handleAddAppointment}>
            {isLoading ? (
              <ActivityIndicator
                color="white"
                style={styles.activityIndicator}
              />
            ) : (
              <Text style={styles.pressTxt}>Add</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    paddingBottom: 100,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 40,
    color: '#131035',
  },
  title2: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    color: '#9F9F9F',
  },
  inputLog: {
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 350,
    height: 60,
    backgroundColor: '#D9D9D9',
  },
  textInput: {
    fontFamily: 'Inter',
    paddingLeft: 30,
    fontSize: 18,
    color: '#000',
    width: 250,
  },
  pressBtn: {
    alignItems: 'center',
    left: 10,
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 350,
    height: 60,
  },
  pressTxt: {
    top: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 25,
    color: '#fff',
  },
  keyboard: {paddingBottom: 0},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
