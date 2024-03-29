import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CustomAlert from './../components/CustomAlert';
import api from '../utils/api';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //requires at least one letter and one number, and a minimum length of 8 characters
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register({navigation}: {navigation: any}) {
  const [disableButton, setDisableButton] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [borderColor, setBorderColor] = useState('#D9D9D9');
  const [clinicName, onClinicNameChange] = useState('');
  const [serialNumber, onNumberChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [location, onLocationChange] = useState('');
  const [mobile, onMobileChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [passwordConform, onPasswordConfirmChange] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message: React.SetStateAction<string>) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };
  // function to validate password
  useEffect(() => {
    if (!EMAIL_PATTERN.test(email) && email !== '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!PASSWORD_REGEX.test(password) && password !== '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (
      passwordConform === password &&
      password !== '' &&
      passwordConform !== ''
    ) {
      setDisableButton(false);
      setBorderColor('#D9D9D9');
    } else {
      setDisableButton(true);
      if (password === '' && passwordConform === '') {
        setBorderColor('#D9D9D9');
      } else {
        setBorderColor('red');
      }
    }
  }, [password, passwordConform, email]);

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
        showAlert('All field must be provided');
      } else {
        setLoading(true);
        // add to clinic table
        try {
          const response = await api.post('clinics/', {
            serial_number: serialNumber,
            clinic_name: clinicName,
            clinic_location: location,
            email: email,
            phone: mobile,
          });
          const json = response.data;
          if (json.data.code === '23503') {
            showAlert('Error occurs!, serial number not found');
            setLoading(false);
          }
          if (json.data.code === '23505') {
            showAlert('Error occurs!, clinic name already exists');
            setLoading(false);
          } else {
            await api.post('purchases/', {
              serial_number: serialNumber,
              clinic_name: clinicName,
              product_name: 'default',
            });
            // add to user table
            await api
              .post('signup/', {
                first_name: clinicName,
                last_name: serialNumber,
                email: email,
                password: password,
                role: 'clinic',
                phone: mobile,
              })
              .then(res => {
                const signupData = res.data;
                if (signupData.data.data.code === '23505') {
                  setLoading(false);
                  showAlert('Error occurs!,user already exists.');
                } else {
                  showAlert('Registration Successfully!');
                  navigation.navigate('Login');
                  setLoading(false);
                }
              });
          }
        } catch (err) {
          showAlert('Error occurs!');
          setLoading(false);
        }
      }
    } catch (error) {
      showAlert('Internal Error occurs!');
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.select({android: undefined, ios: 'padding'})}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
        style={styles.keyboard}>
        <View style={styles.form}>
          <Text style={styles.title}>Clinic</Text>
          <Text style={styles.title2}>
            Welcome to Patron, register as a Clinic
          </Text>
          <View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onClinicNameChange}
                placeholder="Clinic Name"
                cursorColor="black"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onNumberChange}
                placeholder="Serial Number"
                maxLength={15}
                cursorColor="black"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onLocationChange}
                placeholder="Location"
                cursorColor="black"
                placeholderTextColor={'grey'}
              />
            </View>
            <View>
              <View style={styles.inputLog}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onEmailChange}
                  placeholder="Email"
                  cursorColor="black"
                  placeholderTextColor={'grey'}
                />
              </View>
              {emailError && (
                <Text style={{color: 'red', marginLeft: 15}}>
                  Please enter a valid email
                </Text>
              )}
            </View>

            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onMobileChange}
                placeholder="Phone Number"
                placeholderTextColor={'grey'}
                keyboardType={'numeric'}
                cursorColor="black"
                maxLength={12}
              />
            </View>
            <View style={{flexDirection: 'column'}}>
              <View
                style={[
                  styles.inputLog,
                  {borderColor: borderColor, borderWidth: 1},
                ]}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onPasswordChange}
                  placeholder="Password"
                  secureTextEntry={true}
                  cursorColor="black"
                  placeholderTextColor={'grey'}
                />
              </View>
              {passwordError && (
                <Text style={{color: 'red', marginLeft: 15}}>
                  Please enter a strong password
                </Text>
              )}
            </View>
            <View
              style={[
                styles.inputLog,
                {borderColor: borderColor, borderWidth: 1},
              ]}>
              <TextInput
                style={styles.textInput}
                onChangeText={onPasswordConfirmChange}
                secureTextEntry={true}
                placeholder="Confirm Password"
                cursorColor="black"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <Pressable
            disabled={disableButton}
            style={styles.pressBtn}
            onPress={handleClinicRegister}>
            {isLoading ? (
              <ActivityIndicator
                color="white"
                style={styles.activityIndicator}
              />
            ) : (
              <Text style={styles.pressTxt}>Sign Up</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      {/* custom alert */}
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={closeAlert}
      />
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
    fontFamily: 'Roboto',
    fontSize: 32,
    color: '#131035',
  },
  title2: {
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 350,
    height: 60,
  },
  pressTxt: {
    padding: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
  },
  keyboard: {paddingBottom: 0},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
