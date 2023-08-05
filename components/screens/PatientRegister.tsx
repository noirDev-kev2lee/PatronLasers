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
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import CustomAlert from './partials/CustomAlert';
import api from '../utils/api';

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //requires at least one letter and one number, and a minimum length of 8 characters
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PatientRegister = ({navigation}: {navigation: any}) => {
  const [disableButton, setDisableButton] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [borderColor, setBorderColor] = useState('#D9D9D9');
  const [clinicName, onClinicChange] = useState('');
  const [firstName, onFnameChange] = useState('');
  const [lastName, onLnameChange] = useState('');
  const [gender, onGenderChange] = useState('');
  const [age, onAgeChange] = useState('');
  const [email, onEmailChange] = useState('');
  const [mobile, onMobileChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [passwordConform, onPasswordConfirmChange] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
        showAlert('All field must be provided');
      } else {
        // add to user table
        try {
          const response = await api.post('signup/', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            role: 'patient',
            phone: mobile,
          });
          const json = response.data;
          if (json.data.data.code === '23505') {
            showAlert('Error occurs!, user exists already');
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
            showAlert('Registration Successfully!');
            navigation.navigate('Login');
          }
        } catch (error) {
          setLoading(true);
          showAlert('Error occurs!');
        }
      }
    } catch (error) {
      showAlert('Wrong email or password');
    }
  };
  const handleOptionSelect = (option: any) => {
    onGenderChange(option);
    setModalVisible(false);
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
                onChangeText={onClinicChange}
                placeholder="Clinic Name"
                placeholderTextColor={'grey'}
              />
            </View>
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
                  onFocus={() => setModalVisible(true)}
                  value={gender}
                  placeholder="Gender"
                  cursorColor="black"
                  placeholderTextColor={'grey'}
                />
                <Modal
                  visible={modalVisible}
                  transparent
                  animationType="fade"
                  onRequestClose={() => setModalVisible(false)}>
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}>
                    <View style={styles.modalOverlay}>
                      <View style={styles.modalContent}>
                        <Text
                          style={styles.option}
                          onPress={() => handleOptionSelect('Male')}>
                          Male
                        </Text>
                        <Text
                          style={styles.option}
                          onPress={() => handleOptionSelect('Female')}>
                          Female
                        </Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </Modal>
              </View>
              <View style={styles.inputcustom}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={onAgeChange}
                  placeholder="Age"
                  keyboardType={'numeric'}
                  maxLength={3}
                  cursorColor="black"
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
                maxLength={12}
                cursorColor="black"
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
                placeholder="Password Confirm"
                cursorColor="black"
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
      {/* custom alert */}
      <CustomAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={closeAlert}
      />
    </ScrollView>
  );
};

export default PatientRegister;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 20,
    paddingBottom: 180,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 35,
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
    paddingLeft: 20,
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
    top: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
  },
  keyboard: {paddingBottom: 0},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
  // for select input
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionInput: {
    paddingLeft: 20,
    margin: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#000',
    backgroundColor: '#e6e6e9',
    width: 350,
    height: 60,
    borderRadius: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    fontSize: 18,
    color: '#000',
  },
});
