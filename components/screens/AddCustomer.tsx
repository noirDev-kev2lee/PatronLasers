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
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import api from '../utils/api';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //requires at least one letter and one number, and a minimum length of 8 characters
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AddCustomer = () => {
  const [disableButton, setDisableButton] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [borderColor, setBorderColor] = React.useState('#D9D9D9');
  const [clinicName, onClinicChange] = React.useState('');
  const [firstName, onFnameChange] = React.useState('');
  const [lastName, onLnameChange] = React.useState('');
  const [gender, onGenderChange] = React.useState('');
  const [age, onAgeChange] = React.useState('');
  const [email, onEmailChange] = React.useState('');
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

  const handlePatientRegister = async () => {
    try {
      if (
        email === '' ||
        password === '' ||
        firstName === '' ||
        lastName === '' ||
        mobile === '' ||
        age === '' ||
        gender === '' ||
        clinicName === ''
      ) {
        Alert.alert('All field must be provided');
      } else {
        // add to user table
        try {
          const response = await api.post('signup/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role: 'patient',
          });
          const json = response.data;
          if (json.data.data.code === '23505') {
            Alert.alert('Error occurs!, user exists already');
            setLoading(false);
          } else {
            //  add to patient table
            await api.post('patients/', {
              clinic_name: clinicName,
              first_name: firstName,
              last_name: lastName,
              age: age,
              gender: gender.toLowerCase(),
              phone: mobile,
              email: email,
            });
            setLoading(false);
            Alert.alert('Registration Successfully!');
          }
        } catch (error) {
          setLoading(true);
          Alert.alert('Error occurs!');
        }
      }
    } catch (error) {
      Alert.alert('Wrong email or password');
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
          <View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onFnameChange}
                placeholder="First Name"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputLog}>
              <TextInput
                style={styles.textInput}
                onChangeText={onLnameChange}
                placeholder="Last Name"
                placeholderTextColor={'grey'}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.inputcustom}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onGenderChange}
                  placeholder="Gender"
                  placeholderTextColor={'grey'}
                />
              </View>
              <View style={styles.inputcustom}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onAgeChange}
                  placeholder="Age"
                  keyboardType={'numeric'}
                  maxLength={3}
                  placeholderTextColor={'grey'}
                />
              </View>
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
                keyboardType={'numeric'}
                maxLength={10}
                placeholderTextColor={'grey'}
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
                placeholder="Password Confirm"
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <Pressable
            disabled={disableButton}
            style={styles.pressBtn}
            onPress={handlePatientRegister}>
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
};

export default AddCustomer;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    height:800,//if this breakes on Iphone Please change Back.
    paddingBottom: 180,
    alignContent: 'center',
    backgroundColor: '#f7f7f7',
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
  inputcustom: {
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 165,
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
  keyboard: {paddingBottom: 10},
  activityIndicator: {
    alignSelf: 'center',
    padding: 50,
    
  },
});
