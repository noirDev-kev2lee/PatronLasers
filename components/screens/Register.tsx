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
} from 'react-native';
import React from 'react';
const RegInputText = () => {
  const [FirstName, onFnameChange] = React.useState('First Name');
  const [LastName, onLnameChange] = React.useState('Last Name');
  const [Email, onEmailChange] = React.useState('Email');
  const [SerialNumber, onNumberChange] = React.useState('Serial Number');
  const [Mobile, onMobileChange] = React.useState('Mobile');
  const [Password, onPasswordChange] = React.useState('Password');

  return (
    <View>
      <View style={styles.inputLog}>
        <TextInput
          style={styles.textInput}
          onChangeText={onFnameChange}
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
          onChangeText={onNumberChange}
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
  );
};
export default function Register({navigation}) {
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
        style={styles.keyboard}>
        <View style={styles.form}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.title2}>
            Welcome to Patron, register as a Clinic
          </Text>
          <RegInputText />
          <Pressable
            style={styles.pressBtn}
            onPress={() => navigation.navigate('Products')}>
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
  keyboard: { paddingBottom: 30},
});
