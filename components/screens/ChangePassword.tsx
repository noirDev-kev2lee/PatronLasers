import React,{useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CustomAlert from './partials/CustomAlert';
import api from '../utils/api';

const ChangePassword = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const data = route.params as {username: string; email: string; lastname: string; role: string; id:string;};
  const {username, email, lastname,role,id} = data;
 
  
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConform, setPasswordConfirm] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
 

  const showAlert = (message: React.SetStateAction<string>) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };
  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleChangePassword = async () => {
    if (password === '' || newPassword === '' || passwordConform === '') {
      showAlert('All field must be provided');
    }else{
     if(passwordConform === newPassword){
      try{
        api.put(`users/${id}`,{
          id: id,
          first_name: username,
          last_name: lastname ,
          email: email,
          password: newPassword,
          role: role
        }).then(()=>{
          showAlert('Password Changed Successfuly!');
          navigation.navigate('Login');
        }).catch((err)=>{
          return err
          showAlert('Error occured')
        })
      }catch(error){
        showAlert('Error occured')
        return error
      }
     }else{
      showAlert('Passwords are not equal')
     }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
          style={styles.keyboard}>
          <View style={styles.formContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Change Password </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  placeholder="Enter old password"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.inputStyle}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setNewPassword}
                  secureTextEntry={true}
                  placeholder="Enter New password"
                  placeholderTextColor={'gray'}
                />
               
              </View>
              <View style={styles.inputStyle}>
                  <TextInput
                  style={styles.textInput}
                  onChangeText={setPasswordConfirm}
                  secureTextEntry={true}
                  placeholder="Confirm New password"
                  placeholderTextColor={'gray'}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <Pressable style={styles.pressBtn} onPress={handleChangePassword}>
                {isLoading ? (
                  <ActivityIndicator
                    color="white"
                    style={styles.activityIndicator}
                  />
                ) : (
                  <Text style={styles.pressTxt}>Change Password</Text>
                )}
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
        {/* custom alert */}
        <CustomAlert visible={alertVisible} message={alertMessage} onClose={closeAlert} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttons: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    marginTop: 50,
    fontFamily: 'Inter-Bold',
    fontSize: 30,
    color: '#131035',
  },
  inputStyle: {
    margin: 10,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 350,
    height: 60,
    backgroundColor: '#D9D9D9',
  },
  textInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#000',
    width: 250,
  },
  pressBtn: {
    borderRadius: 12,
    width: 350,
    height: 60,
    padding: 10,
    backgroundColor: '#131035',
  },
  pressTxt: {
    fontFamily: 'Inter',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  pressBtn2: {
    right: -110,
  },
  forgotPass: {
    top: -10,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#737373',
  },
  textContainer: {
    paddingLeft: 25,
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
  },
  keyboard: {paddingBottom: 30},
  formContainer: {
    flexDirection: 'column',
  },
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
