import { Button, Pressable, StyleSheet,TextInput, Text, View, KeyboardAvoidingView } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
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
      <View style={styles.form}>
        <TextInput style={styles.textInput} onChangeText={onFnameChange} value={FirstName}/>
        <TextInput style={styles.textInput} onChangeText={onLnameChange} value={LastName} />
        <TextInput style={styles.textInput2} onChangeText={onNumberChange} value={SerialNumber} />
        <TextInput style={styles.textInput2} onChangeText={onEmailChange} value={Email} />
        <TextInput style={styles.textInput2} onChangeText={onMobileChange} value={Mobile} />
        <TextInput style={styles.textInput2} onChangeText={onPasswordChange} placeholder='Password' />
      </View>
  )
  }
export default function Register ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <RegInputText/>
      <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Products')}>
      <Text style={styles.pressTxt}>Register</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    flexWrap:'wrap',
    alignItems:'center'
  },
  title:{
    fontSize:50,
    fontWeight:'600',
    textTransform:'uppercase',
    color:'#03045E',
    textAlign:'left',
    margin:50
  },
  textInput:{
    padding:10,
    marginHorizontal:10,
    margin:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#DDDDDD',
    width:180,
    height:40,
    borderRadius:8
  },
  textInput2:{
    padding:10,
    margin:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#DDDDDD',
    width:380,
    height:40,
    borderRadius:8
  },
  form:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  pressBtn:{
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#03045E',
    width:280,
    height:50
  },
  pressTxt:{
    textAlign:'center',
    textTransform:'uppercase',
    letterSpacing:2,
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  }
})