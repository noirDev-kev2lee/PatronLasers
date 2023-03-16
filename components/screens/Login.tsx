import { Alert, Button, Pressable, SafeAreaView, StyleSheet, Text, TextComponent, TextInput, TextInputComponent, ToastAndroid, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const InputText = () => {
  const [text, onChangeText]= React.useState('User Name');
  const [password, passwordChange]= React.useState('Password')
  return(
      <View style={styles.form}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.textInput} onChangeText={onChangeText} value={text}/>
        <TextInput style={styles.textInput} onChangeText={passwordChange} value={password} />
      </View>
  )
}
const Login = ({navigation}) => {
  return (
      <View style={styles.container}>
        <InputText />
        <View style={styles.buttons}>
          <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Products')}>
          <Text style={styles.pressTxt}>Log In</Text>
          </Pressable>
          <Pressable onPress={() => Alert.alert('Not Working yet')}>
          <Text style={styles.pressTxt1}>Forgot Password</Text>
        </Pressable>
        </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  form:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  buttons:{
    marginTop:50,
    flex:1,
    alignItems:'center'
  },
  title:{
    textAlign:'center',
    fontSize:50,
    textTransform:'uppercase',
    fontWeight:'bold',
    marginTop:100,
    color:'#03045E'
  },
  textInput:{
    margin:20,
    padding:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#DDDDDD',
    width:300,
    height:60,
    borderRadius:8
  },
  pressBtn:{
    borderRadius:8,
    backgroundColor:'#03045E',
    width:150,
    height:50
  },
  pressTxt:{
    textAlign:'center',
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  pressTxt1:{
    marginTop:20,
    paddingVertical:12,
    paddingHorizontal:50,
    fontSize:15,
    fontWeight:'bold',
    color:'#03045E'
  }
})