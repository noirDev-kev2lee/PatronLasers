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
import React, {useEffect} from 'react';
import axios from 'axios';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //requires at least one letter and one number, and a minimum length of 8 characters
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register({navigation}) {
  const [disableButton, setDisableButton] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [borderColor, setBorderColor] = React.useState('#D9D9D9');
  const [clinicName, onClinicNameChange] = React.useState('');
  const [serialNumber, onNumberChange] = React.useState('');
  const [email, onEmailChange] = React.useState('');
  const [location, onLocationChange] = React.useState('');
  const [mobile, onMobileChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [passwordConform, onPasswordConfirmChange] = React.useState('');
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
        Alert.alert('All field must be provided');
      } else {
        setLoading(true);
        // add to clinic table
        try {
          const response = await axios.post(
            'http://15.236.168.186:7000/api/v1/clinics/',
            {
              serial_number: serialNumber,
              clinic_name: clinicName,
              clinic_location: location,
              email: email,
              phone: mobile,
            },
          );
          const json = response.data;
          if (json.data.code === '23503') {
            Alert.alert('Error occurs!, serial number not found');
            setLoading(false);
          }
          if (json.data.code === '23505') {
            Alert.alert('Error occurs!, clinic name already exists');
            setLoading(false);
          } else {
            // add to user table
            await axios
              .post('http://15.236.168.186:7000/api/v1/signup/', {
                first_name: clinicName,
                last_name: serialNumber,
                email: email,
                password: password,
                role: 'clinic',
              })
              .then(res => {
                const signupData = res.data;
                console.log();
                if (signupData.data.data.code === '23505') {
                  setLoading(false);
                  Alert.alert('Error occurs!,user already exists.');
                } else {
                  Alert.alert('Registration Successfully!');
                  navigation.navigate('Login');
                  setLoading(false);
                }
              });
          }
        } catch (err) {
          Alert.alert('Error occurs!');
          setLoading(false);
        }
      }
    } catch (error) {
      Alert.alert('Internal Error occurs!');
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
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onNumberChange}
                placeholder="Serial Number"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onLocationChange}
                placeholder="Location"
                placeholderTextColor={'grey'}
              />
            </View>
            <View>
              <View style={styles.inputLog}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onEmailChange}
                  placeholder="Email"
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
                maxLength={10} // optional: limit the number of characters to 10 for a typical
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
    padding: 10,
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    color: '#fff',
  },
  keyboard: {paddingBottom: 0},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
