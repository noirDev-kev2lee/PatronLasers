import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function PatientHome() {
  return (
    <View>
      <Text style={styles.heading}>Welcome To Patron.</Text>
      <Text style={styles.heading2}>Appointments and Services</Text>
      <Text style={styles.heading2}>Appointments and Services</Text>
      <Text style={styles.heading2}>Appointments and Services</Text>

    <ScrollView pagingEnabled={true} horizontal style={styles.scroll}>
      <View style={styles.scrollContainer}>
      <View style={[styles.RecCard]}> 
          <View style={styles.RecCardInfo}>
            <Text style={styles.appointTitle}>Tatoo Removal</Text>
            <Text style={styles.appointTitle2}>Israel Clinic</Text>
            <Text style={styles.appointInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum, mollitia. Cumque reiciendis repellendus exercitationem nam harum velit id nemo quos, non qui, officia itaque asperiores eos. Consequuntur asperiores, numquam deserunt doloribus similique consectetur at dignissimos laudantium ipsa facilis unde odit, iure nemo.</Text>
          </View>
        </View>
        <View style={[styles.RecCard]}> 
          <View style={styles.RecCardInfo}>

          </View>
        </View>
      </View>
    </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer:{
    backgroundColor:'#1b2a41',
    marginTop:20,
    flexDirection:'row'
  },
  heading:{
    fontFamily:'Inter',
    fontSize:40,
  },
  heading2:{
    fontFamily:'Inter',
    fontSize:20,
  },
  RecCardInfo:{
    height:300,
    width:200,
    textAlign:'justify',
  },
  RecCard:{
    flex:1,
    width: 300,
    height: 500,
    margin:20,
    borderRadius: 10,
    elevation:20,
    backgroundColor: '#1b2a41',
  },
  appointTitle:{
    padding:10,
    width:300,
    fontFamily:'Roboto-bold',
    fontSize:50,
    color:'#fff'
  },
  appointTitle2:{
    padding:10,
    width:300,
    fontFamily:'Roboto-Regular',
    fontSize:30,
    color:'#fff'
  },
  appointInfo:{
    width:280,
    padding:10,
    textAlign:'left',
    fontFamily:'Inter',
    fontSize:14,
    color:'#fff'
  }
})