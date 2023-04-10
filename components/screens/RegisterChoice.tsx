import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'

export default function RegisterChoice({navigation}) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome To Patron Register </Text>
    <Text style={styles.title2}>We Cater to These Clinics and Patients Alike.Please Choose What You want Us to know You as</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.pressTxt}>Clinic</Text>
          </Pressable>
          <Pressable style={styles.pressBtnPatient} onPress={() => navigation.navigate('Patient')}>
          <Text style={styles.pressTxt}>Patient</Text>
          </Pressable>
        </View>
        </View>
  )
}

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
        top:50,
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
        width:350,
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
        margin:20,
        borderRadius:8,
        backgroundColor:'#e6e6e9',
        width:350,
        height:50
      },
      pressBtnPatient:{
        fontFamily:'Inter-Regular',
        borderRadius:8,
        backgroundColor:'#94c5cc',
        width:350,
        height:50
      },
      pressTxt:{
        marginTop:10,
        textAlign:'center',
        fontFamily:'Inter-Bold',
        textTransform:'uppercase',
        fontSize:20,
        color:'#66666e'
      },
      pressBtn2:{
        right:-110
      },
      pressTxt2:{
        fontFamily:'Inter-Regular',
        fontSize:15,
        color:'#e6e6e9'
      }
})