import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const InputText = () => {
  const [text, onChangeText] = React.useState('User Name');
  const [password, passwordChange] = React.useState('Password');
  console.log(text, password);
  return (
    <View style={styles.form}>
      <View style={styles.inputStyle}>
        <Icon name="email" size={30} color="#000000" />
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder="User Name Or Email"
          placeholderTextColor={'#000'}
        />
      </View>
      <View style={styles.inputStyle}>
        <Icon name="lock" size={30} color="#000000" />
        <TextInput
          style={styles.textInput}
          onChangeText={passwordChange}
          placeholder="Password"
          placeholderTextColor={'#000'}
        />
        <Icon2 name="eye-off" size={30} color="#000000" />
      </View>
    </View>
  );
};
const Login = ({navigation}) => {
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>Let’s sign you in </Text>
        <Text style={styles.title2}>Welcome back.</Text>
        <Text style={styles.title2}>You have been missed.</Text>
      </View>

      <InputText />
      <View style={styles.buttons}>
        <Pressable
          style={styles.pressBtn2}
          onPress={() => Alert.alert('Not Working yet')}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </Pressable>
        <Pressable
          style={styles.pressBtn}
          onPress={() => navigation.navigate('Products')}>
          <Text style={styles.pressTxt}>Log In</Text>
        </Pressable>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
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
    backgroundColor: '#131035',
  },
  pressTxt: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
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
});
