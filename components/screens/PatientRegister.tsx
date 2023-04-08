import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import axios from 'axios';

const PatientRegister = ({navigation}) => {
  const [firstName, onFnameChange] = React.useState('First Name');
  const [lastName, onLnameChange] = React.useState('Last Name');
  const [email, onEmailChange] = React.useState('Email');
  const [mobile, onMobileChange] = React.useState('Mobile');
  const [password, onPasswordChange] = React.useState('Password');

  const handlePatientRegister = async () => {
    try {
      if (
        email === '' ||
        password === '' ||
        firstName === '' ||
        lastName === '' ||
        mobile === ''
      ) {
        Alert.alert('All field must be provided');
      } else {
        const response = await axios.post(
          'http://15.236.168.186:7000/api/v1/signup/',
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role: 'patient',
          },
        );

        const json = response.data;
        console.log(json);
        Alert.alert('Registration Successfully!');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Wrong email or password');
      console.error('Wrong email or password', error);
    }
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
        style={styles.keyboard}>
        <View style={styles.form}>
          <Text style={styles.title}>Patient</Text>
          <Text style={styles.title2}>
            Welcome to Patron, register as a Patient
          </Text>
          <View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onFnameChange}
                placeholder="First Name"
                placeholderTextColor={'#9999a1'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onLnameChange}
                placeholder="Last Name"
                placeholderTextColor={'#9999a1'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onEmailChange}
                placeholder="Email"
                placeholderTextColor={'#9999a1'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onMobileChange}
                placeholder="Phone Number"
                placeholderTextColor={'#9999a1'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPasswordChange}
                placeholder="Password"
                placeholderTextColor={'#9999a1'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPasswordChange}
                placeholder="Password Confirm"
                placeholderTextColor={'#9999a1'}
              />
            </View>
          </View>
          <Pressable style={styles.pressBtn} onPress={handlePatientRegister}>
            <Text style={styles.pressTxt}>Register</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PatientRegister;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
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
    fontSize: 20,
    color: '#fff',
  },
  keyboard: {paddingBottom: 30},
});
