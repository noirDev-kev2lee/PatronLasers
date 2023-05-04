import React, {useState} from 'react';
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
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import DatePicker from 'react-native-date-picker';

export function AddCustomer() {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Customer</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Address"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Email"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
}
export function AddAppointment() {
  const [isLoading, setLoading] = React.useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [service, setService] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [open, setOpen] = useState(false);
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');

  const handleSaveAppointment = async () => {
    try {
      if (
        fname === '' ||
        lname === '' ||
        service === '' ||
        startDate === '' ||
        endDate === ''
      ) {
        Alert.alert('Email or password must be provided');
      } else {
        setLoading(true);
        await axios
          .post('http://15.236.168.186:7000/api/v1/appointments/', {
            patient_id: '75757',
            clinic_name: 'hghgg',
            fname: fname,
            lname: lname,
            service_type: service,
            start_date: startDate,
            start_time: '55t6',
            end_date: endDate,
            end_time: '44884',
            job_status: 'pending',
          })
          .then(() => {
            setLoading(false);
            Alert.alert('Data sent Successfully!');
          })
          .catch(() => {
            Alert.alert('Data sent Successfully!');
          });
      }
    } catch (error) {
      Alert.alert('Server Error or user not found');
      setLoading(false);
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Appointment</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setFname}
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setLname}
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setService}
                placeholder="Service Type"
              />
              <Pressable title="Open" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={startDate}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setEndDate}
                placeholder="End Date"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={handleSaveAppointment}>
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
      </View>
    </View>
  );
}
const AddProduct = () => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add New Product</Text>
            </View>
            <View style={[styles.form, {height: 300}]}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                placeholder="Serial Number"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                placeholder="Product Name"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export const AboutUs = () => {
  return (
    <View style={styles.aboutUs}>
      <Image style={styles.logo} source={require('../assets/001.png')} />
      <Text style={styles.aboutUsTxt}>Patron Lasers Ltd</Text>
      <Text style={styles.aboutUsPara}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        distinctio eaque nostrum sapiente voluptas cumque facere impedit, esse
        saepe amet tempora repudiandae minus! Dolorem unde reprehenderit aliquid
        nesciunt eum illo!
      </Text>
      <Text style={styles.aboutUsFooter1}>Patron Devs</Text>
      <Text style={styles.aboutUsFooter}>&copy;2023</Text>
    </View>
  );
};
export const FinancialArea = () => {
  return <View />;
};
export default AddProduct;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  textInput: {
    fontFamily: 'Roboto',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#e6e6e9',
    paddingLeft: 20,
    width: 300,
    height: 60,
    color: '#000',
    borderRadius: 12,
  },
  form: {
    flex: 1,
    height: 600,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressBtn: {
    alignItems: 'center',
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 300,
    height: 60,
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  pressTxt1: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eee0cb',
  },
  container: {},

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
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
    color: '#131035',
  },
  logo: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  aboutUs: {
    height: 800,
    backgroundColor: '#131035',
  },
  aboutUsTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    textDecorationColor: '#fff',
    textAlign: 'center',
  },
  aboutUsPara: {
    fontSize: 14,
    marginTop: 20,
    left: 40,
    width: 350,
    textAlign: 'center',
  },
  aboutUsFooter: {
    textAlign: 'center',
  },
  aboutUsFooter1: {
    marginTop: 300,
    textAlign: 'center',
  },
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
