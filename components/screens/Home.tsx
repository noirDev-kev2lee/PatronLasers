import { View,StyleSheet, Pressable, Text, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../assets/001.png')}/>
      </View>
      <Pressable style={styles.pressBtnReg} onPress={() => navigation.navigate('Register')}>
      <Text style={styles.pressTxt}>Register</Text>
      </Pressable>
      <Pressable style={styles.pressBtnLog} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.pressTxt}>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    logo:{
      width:400,
      height:200,
      marginRight:50,
      resizeMode:'stretch',
      tintColor:'#03045E'
    },
    pressBtnLog:{
      margin:10,
      borderRadius:8,
      backgroundColor:'#03045E',
      width:300,
      height:50
    },
    pressBtnReg:{
        margin:10,
        borderRadius:8,
        backgroundColor:'#03045E',
        width:300,
        height:50
    },
    pressTxt:{
      fontFamily:'',
      textAlign:'center',
      textTransform:'uppercase',
      letterSpacing:2,
      marginTop:10,
      fontSize:20,
      fontWeight:'bold',
      color:'#fff'
    },
  })
