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
import axios from 'axios';
// import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Login = ({navigation}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, passwordChange] = React.useState('');
  const [hide, setHide] = React.useState(true);

  const handleLogin = async () => {
    try {
      if (email === '' || password === '') {
        Alert.alert('Email or password must be provided');
      } else {
        setLoading(true);
        const response = await axios.post(
          'http://15.236.168.186:7000/api/v1/signin/',
          {
            email,
            password,
          },
        );

        const json = response.data;
        onChangeEmail('');
        passwordChange('');
        setLoading(false);
        Alert.alert('Login Successfully!');
        if (json.data.role === 'clinic') {
          navigation.navigate('Product');
        } else if (json.data.role === 'patient') {
          navigation.navigate('patient_home');
        }
      }
    } catch (error) {
      Alert.alert('Wrong email or password');
      console.error('Wrong email or password', error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate('Home')}>
          <Icon3
            style={styles.Arrow}
            name="arrowleft"
            size={30}
            color="#000000"
          />
        </Pressable>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
          style={styles.keyboard}>
          <View style={styles.formContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Let’s sign you in </Text>
              <Text style={styles.title2}>Welcome back.</Text>
              <Text style={styles.title2}>You have been missed.</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputStyle}>
                <Icon name="email" size={30} color="#000000" />
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeEmail}
                  placeholder="Username Or Email"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.inputStyle}>
                <Icon name="lock" size={30} color="#000000" />

                <TextInput
                  style={styles.textInput}
                  onChangeText={passwordChange}
                  secureTextEntry={hide}
                  placeholder="Enter password"
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
              <Pressable
                style={styles.pressBtn2}
                onPress={() => Alert.alert('Not Working yet')}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
              </Pressable>
              <Pressable style={styles.pressBtn} onPress={handleLogin}>
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
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;

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
    fontSize: 40,
    color: '#131035',
  },
  title2: {
    width: 300,
    fontFamily: 'Inter',
    fontSize: 25,
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
    alignItems:'center',
    backgroundColor: '#131035',
  },
  pressTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
    marginTop:3,
    color: 'white',
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
