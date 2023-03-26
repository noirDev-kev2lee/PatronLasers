import { Alert, StatusBar, StyleSheet, Text, View, TextInput, Pressable,  } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

const TabSupport = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      
        <View style={{flexDirection:'column',justifyContent:'flex-start'}}>
          <Text style={{color:'#131035',fontSize:25, paddingLeft:15, paddingBottom:10, paddingTop:15}}>
            Create a card
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.textInput2} placeholderTextColor='#000' placeholder="Serial Number" />
          <TextInput style={styles.textInput2} placeholderTextColor='#000' placeholder="Card type" />
          <TextInput style={styles.textInput2} placeholderTextColor='#000' placeholder="Card title" />
          <TextInput multiline={true} numberOfLines={10} style={styles.textInput3} placeholderTextColor='#000' placeholder="Type your message..."/>
        </View>
        <SubButton/>
      
    </View>
    
  )
}

const SubButton = () => {
  return(
  <View style={styles.container2}>
    <View style={styles.buttons}>
      <Pressable style={styles.pressBtn} onPress={() => Alert.alert('Submitted')}>
      <Text style={styles.pressTxt}>Request</Text>
      </Pressable>
    </View>
  </View>
  )
}

export default TabSupport


const styles = StyleSheet.create({
  text:{
    color:'#000'
  },
  textInput2:{
    padding:10,
    margin:10,
    fontSize:20,
    color:'#000',
    backgroundColor:'#D9D9D9',
    width:380,
    height:60,
    borderRadius:8
  },
  textInput3:{
    textAlignVertical:'top',
    padding:10,
    margin:10,
    fontSize:20,
    backgroundColor:'#D9D9D9',
    width:380,
    height:200,
    borderRadius:8
  },
  form:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  buttons:{
    marginTop:50,
    flex:1,
    alignItems:'center'
  },
  pressBtn:{
    borderRadius:8,
    backgroundColor:'#03045E',
    width:250,
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
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'column'
  },
  container2:{
    marginTop:250,
    flex:1,
    flexDirection:'column'
  },
})