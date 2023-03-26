import { Button, Pressable, StyleSheet,TextInput, Text, View, KeyboardAvoidingView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
const RegInputText = () => {
  const [FirstName, onFnameChange]= React.useState('First Name');
  const [LastName, onLnameChange]= React.useState('Last Name')
  const [Email, onEmailChange]= React.useState('Email')
  const [SerialNumber, onNumberChange]= React.useState('Serial Number')                          
  const [Mobile, onMobileChange]= React.useState('Mobile')
  const [Password, onPasswordChange]= React.useState('Password')
  return(
    <View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onFnameChange} placeholder='First Name' placeholderTextColor={'#000'}/></View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onLnameChange} placeholder='Last Name' placeholderTextColor={'#000'}/></View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onNumberChange} placeholder='Serial Number' placeholderTextColor={'#000'}/></View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onEmailChange} placeholder='Email' placeholderTextColor={'#000'}/></View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onMobileChange} placeholder='Phone Number' placeholderTextColor={'#000'}/></View>
    <View style={styles.inputLog}>

    <TextInput style={styles.textInput} onChangeText={onPasswordChange} placeholder='Password' placeholderTextColor={'#000'}/>
    </View>
    <View style={styles.inputLog}>
    <TextInput style={styles.textInput} onChangeText={onPasswordChange} placeholder='Password Confirm' placeholderTextColor={'#000'}/></View>
  </View>
)
  }
export default function Register ({navigation}) {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.title2}>Welcome to Patron, register as a clinic or patient</Text>
      <RegInputText/>
      <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Products')}>
      <Text style={styles.pressTxt}>Register</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    flex:1,
    padding:20,
    alignContent:'center',
  },
  title:{
    textAlign:'left',
    fontFamily:'Inter-Regular',
    fontSize:50,
    color:'#03045E'
  },
  title2:{
    fontFamily:'Inter-Regular',
    fontSize:20,
    color:'#000'
  },
  inputLog:{
    margin:10,
    paddingHorizontal:10,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
    width:350,
    backgroundColor:'#f3f3f3'
  },
  textInput:{
    fontFamily:'Inter',
    paddingLeft:30,
    fontSize:20,
    color:'#000',
    backgroundColor:'#f4f4f4',
    width:250,
  },
  pressBtn:{
    alignItems:'center',
    left:10,
    top:20,
    fontFamily:'Inter-Regular',
    borderRadius:8,
    backgroundColor:'#03045E',
    width:350,
    height:50
  },
  pressTxt:{
    top:10,
    fontFamily:'Inter-Bold',
    fontSize:20,
    color:'#fff'
  },
})