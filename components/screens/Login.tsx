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
        <TextInput inlineImageLeft='mail_outline' style={styles.textInput} onChangeText={onChangeText} value={text}/>
        <Icon style={styles.icons} name={'lock-closed-outline'} size={20} color={'#000'}/>
        <TextInput style={styles.textInput} onChangeText={passwordChange} value={password} />
      </View>
  )
}
const Login = ({navigation}) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome Back </Text>
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
    flex:1,
    alignItems:'center'
  },
  title:{
    textAlign:'left',
    fontFamily:'Inter-Regular',
    fontSize:50,
    color:'#03045E'
  },
  icons:{
  },
  textInput:{
    fontFamily:'Inter-Regular',
    marginBottom:20,
    padding:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#f4f4f4',
    width:350,
    height:60,
    borderRadius:20
  },
  pressBtn:{
    fontFamily:'Inter-Regular',
    borderRadius:8,
    backgroundColor:'#03045E',
    width:350,
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