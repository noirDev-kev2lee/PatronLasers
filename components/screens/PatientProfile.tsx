import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function PatientProfile() {
  return (
    <View>
      <View style={styles.profileHead}>
        <Image style={styles.profileHeadImg} source={require('../assets/customer1.jpg')}/>
        <Text style={styles.profileHeadName}>Thrwaida Kunambi</Text>
        <Text style={styles.profileHeadEmail}>stepbro@example.com</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.profileBio}>
          <Text style={styles.bioHead}>Patient Bio</Text>
          <Text style={styles.bioInfo}>Gender : Female</Text>
          <Text style={styles.bioInfo}>Age : 36</Text>
          <Text style={styles.bioInfo}>Address : Temeke</Text>
          <Text style={styles.bioHead}>Medical History</Text>
          <Text style={styles.bioHead2}>Service 1</Text>
          <Text style={styles.bioInfo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolorem veniam, dolorum perspiciatis repellat repudiandae ex quasi blanditiis nisi magnam?</Text>
          <Text style={styles.bioHead2}>Service 2</Text>
          <Text style={styles.bioInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus labore sunt placeat quas similique.</Text>
          <Text style={styles.bioHead2}>Service 3</Text>
          <Text style={styles.bioInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus labore sunt placeat quas similique.</Text>
          <Text style={styles.bioHead2}>Service 4</Text>
          <Text style={styles.bioInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus labore sunt placeat quas similique.</Text>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  profileHead:{
    marginBottom:10,
    alignItems:'center',
  },
  profileHeadImg:{
    height:150,
    width:150,
    borderRadius:100,
    marginVertical:20,
    resizeMode:'contain',
  },
  profileHeadName:{
    fontFamily:'Roboto-Regular',
    fontSize:25,
    color:'#fff'
  },
  profileHeadEmail:{
    fontFamily:'Roboto-Regular',
    fontSize:15,
    color:'gold'
  },
  profileBio:{
    height:450,
    width:400,
    
    marginHorizontal:5,
    paddingHorizontal:20,
    borderRadius:10,
    backgroundColor:'#142131',
  },
  bioHead:{
    marginLeft:5,
    marginBottom:10,
    fontFamily:'Roboto-Bold',
    fontSize:25,
    color:'#fff'
  },
  bioHead2:{
    marginLeft:5,
    marginBottom:10,
    fontFamily:'Roboto-Regular',
    fontSize:20,
    color:'#fff'
  },
  bioInfo:{
    marginLeft:5,
    marginVertical:3,
    fontFamily:'Roboto-Thin',
    fontSize:18,
    color:'#fff'
  }
})