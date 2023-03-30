import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, TextComponent, TextInput, TextInputComponent, ToastAndroid, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const InputText = () => {
  const [text, onChangeText]= React.useState('User Name');
  const [password, passwordChange]= React.useState('Password')
  return(
      <View style={styles.form}>
        <View style={styles.inputLog}>
        <Icon style={styles.icons} name={'mail-outline'} size={20} color={'#000'}/>
        <TextInput style={styles.textInput} onChangeText={onChangeText} placeholder='User Name Or Email' placeholderTextColor={'#000'}/></View>
        <View style={styles.inputPass}>
        <Icon name={'lock-closed-outline'} size={20} color={'#000'}/>
        <TextInput style={styles.textInput} onChangeText={passwordChange} placeholder='Password' placeholderTextColor={'#000'}/><Icon name={'eye-off-outline'} size={20} color={'#000'}/></View>
      </View>
  )
}
const Login = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome Back </Text>
    <Text style={styles.title2}>Happy to have you back using Patron Services.
    Proceed to use all we offer.</Text>
        <InputText />
        <View style={styles.buttons}>
        <Pressable style={styles.pressBtn2} onPress={() => Alert.alert('Not Working yet')}>
          <Text style={styles.pressTxt2}>Forgot Password?</Text>
        </Pressable>
          <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.pressTxt}>Log In</Text>
          </Pressable>
        </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
  },
  form:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  buttons:{
    flex:1,
    alignItems:'center',
  },
  title:{
    marginTop:100,
    margin:10,
    textAlign:'left',
    fontFamily:'Inter-Bold',
    fontSize:50,
    color:'#e6e6e9'
  },
  title2:{
    margin:10,
    width:300,
    lineHeight:40,
    fontFamily:'Inter',
    fontSize:30,
    color:'grey'
  },
  inputLog:{
    margin:10,
    paddingHorizontal:10,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:20,
    width:350,
    backgroundColor:'#f3f3f3'
  },
  inputPass:{
    margin:10,
    paddingHorizontal:10,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:20,
    height:50,
    width:350,
    backgroundColor:'#f3f3f3'
  },
  textInput:{
    fontFamily:'Inter-Regular',
    padding:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#f4f4f4',
    width:250,
  },
  pressBtn:{
    fontFamily:'Inter-Regular',
    borderRadius:8,
    backgroundColor:'#e6e6e9',
    width:350,
    height:50
  },
  pressTxt:{
    marginTop:10,
    textAlign:'center',
    fontFamily:'Inter-Bold',
    fontSize:20,
    color:'#66666e'
  },
  pressBtn2:{
    right:-110
  },
  pressTxt2:{
    top:-10,
    fontFamily:'Inter-Regular',
    fontSize:15,
    color:'#e6e6e9'
  }
})