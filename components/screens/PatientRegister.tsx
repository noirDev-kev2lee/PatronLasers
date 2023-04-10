import { Button, Pressable, StyleSheet,TextInput, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const RegInputText = () => {
    const [FirstName, onFnameChange]= React.useState('First Name');
    const [LastName, onLnameChange]= React.useState('Last Name')
    const [Email, onEmailChange]= React.useState('Email')
    const [SerialNumber, onNumberChange]= React.useState('Serial Number')
    const [ClinicName, onClinicName]= React.useState('Clinic')                             
    const [Mobile, onMobileChange]= React.useState('Mobile')
    const [Password, onPasswordChange]= React.useState('Password')
    return(
      <View>
      <View style={styles.inputLog}>
  
      <TextInput style={styles.textInput} onChangeText={onFnameChange} placeholder='First Name' placeholderTextColor={'#9999a1'}/></View>
      <View style={styles.inputLog}>
  
      <TextInput style={styles.textInput} onChangeText={onLnameChange} placeholder='Last Name' placeholderTextColor={'#9999a1'}/></View>
      <View style={styles.inputLog}>
  
      <TextInput style={styles.textInput} onChangeText={onEmailChange} placeholder='Email' placeholderTextColor={'#9999a1'}/></View>
      
      <View style={styles.inputLog}>
      <TextInput style={styles.textInput} onChangeText={onMobileChange} placeholder='Phone Number' placeholderTextColor={'#9999a1'}/></View>
      
      <View style={styles.inputLog}>
      <TextInput style={styles.textInput} onChangeText={onClinicName} placeholder='Clinic Name' placeholderTextColor={'#9999a1'}/></View>

      <View style={styles.inputLog}> 
      <TextInput style={styles.textInput} onChangeText={onPasswordChange} placeholder='Password' placeholderTextColor={'#9999a1'}/>
      </View>
      
      <View style={styles.inputLog}>
      <TextInput style={styles.textInput} onChangeText={onPasswordChange} placeholder='Password Confirm' placeholderTextColor={'#9999a1'}/></View>

    </View>
  )
    }
const PatientRegister = ({navigation}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Patient</Text>
      <Text style={styles.title2}>Welcome to Patron, register as a Patient</Text>
      <RegInputText/>
      <Pressable style={styles.pressBtnPatient} onPress={() => navigation.navigate('Patient Screen')}>
      <Text style={styles.pressTxt}>Register</Text>
      </Pressable>
    </View>
  )
}

export default PatientRegister

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
        color:'#9999a1'
      },
      title2:{
        fontFamily:'Inter-Regular',
        fontSize:20,
        color:'#9999a1'
      },
      inputLog:{
        margin:10,
        paddingHorizontal:10,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:10,
        width:350,
        backgroundColor:'#e6e6e9'
      },
      textInput:{
        fontFamily:'Inter',
        paddingLeft:30,
        fontSize:20,
        color:'#000',
        backgroundColor:'#e6e6e9',
        width:250,
      },
      pressBtnPatient:{
        alignItems:'center',
        left:10,
        top:20,
        fontFamily:'Inter-Regular',
        borderRadius:8,
        backgroundColor:'#94c5cc',
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