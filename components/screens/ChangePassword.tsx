import React from 'react';
import {
  Alert,
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

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

const ChangePassword = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [password, passwordChange] = React.useState('');
  const [newPassword, onNewPasswordChange] = React.useState('');
  const [passwordConform, onPasswordConfirmChange] = React.useState('');
  const [hide, setHide] = React.useState(true);

  const handleChangePassword = async () => {
    if (password === '' || newPassword === '' || passwordConform === '') {
      Alert.alert('All field must be provided');
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
                <Icon name="lock" size={30} color="#000000" />

                <TextInput
                  style={styles.textInput}
                  onChangeText={passwordChange}
                  secureTextEntry={hide}
                  placeholder="Enter old password"
                  placeholderTextColor={'gray'}
                />
                <Pressable onPress={() => setHide(!hide)}>
                  {hide ? (
                    <Icon2 name="eye-off" size={30} color="#000000" />
                  ) : (
                    <Icon2 name="eye-sharp" size={30} color="#000000" />
                  )}
                </Pressable>
              </View>
              <View style={styles.inputStyle}>
                <Icon name="lock" size={30} color="#000000" />

                <TextInput
                  style={styles.textInput}
                  onChangeText={onNewPasswordChange}
                  secureTextEntry={hide}
                  placeholder="Enter New password"
                  placeholderTextColor={'gray'}
                />
                <Pressable onPress={() => setHide(!hide)}>
                  {hide ? (
                    <Icon2 name="eye-off" size={30} color="#000000" />
                  ) : (
                    <Icon2 name="eye-sharp" size={30} color="#000000" />
                  )}
                </Pressable>
              </View>
              <View style={styles.inputStyle}>
                <Icon name="lock" size={30} color="#000000" />

                <TextInput
                  style={styles.textInput}
                  onChangeText={onPasswordConfirmChange}
                  secureTextEntry={hide}
                  placeholder="Confirm New password"
                  placeholderTextColor={'gray'}
                />
                <Pressable onPress={() => setHide(!hide)}>
                  {hide ? (
                    <Icon2 name="eye-off" size={30} color="#000000" />
                  ) : (
                    <Icon2 name="eye-sharp" size={30} color="#000000" />
                  )}
                </Pressable>
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
    padding: 10,
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
