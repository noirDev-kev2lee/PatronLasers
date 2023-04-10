/* eslint-disable @typescript-eslint/no-unused-vars */
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
} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function Register({navigation}) {
  const [clinicName, onClinicNameChange] = React.useState('');
   const [serialNumber, onNumberChange] = React.useState('');
  const [email, onEmailChange] = React.useState('');
  const [location, onLocationChange] = React.useState('');
  const [mobile, onMobileChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');

  const handleClinicRegister = async () => {
    try {
      if (
        email === '' ||
        password === '' ||
        clinicName === '' ||
        serialNumber === '' ||
        location === '' ||
        mobile === ''
      ) {
        Alert.alert('All field must be provided');
      } else {
        const response = await axios.post(
          'http://15.236.168.186:7000/api/v1/signup/',
          {
            first_name: clinicName,
            last_name: serialNumber,
            email: email,
            password: password,
            role: 'clinic',
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
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
        style={styles.keyboard}>
        <View style={styles.form}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.title2}>
            Welcome to Patron, register as a Clinic
          </Text>
          <View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onClinicNameChange}
                placeholder="Clinic Name"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onNumberChange}
                placeholder="Serial Number"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onLocationChange}
                placeholder="Location"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onEmailChange}
                placeholder="Email"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onMobileChange}
                placeholder="Phone Number"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPasswordChange}
                placeholder="Password"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPasswordChange}
                placeholder="Password Confirm"
                placeholderTextColor={'black'}
              />
            </View>
          </View>
          <Pressable style={styles.pressBtn} onPress={handleClinicRegister}>
            <Text style={styles.pressTxt}>Sign Up</Text>
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
    paddingBottom:100,
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
  keyboard: {paddingBottom: 0},
});
