import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/AntDesign'

export default function PatientHome() {
  return (
    <View>
      <Text style={styles.heading}>Welcome To Patron.</Text>
      <Text style={styles.heading2}>Appointments and Services</Text>
      <Text style={styles.heading2}>Manage and Add New Appointment</Text>
      <Text style={styles.heading2}>Medical History</Text>

    <ScrollView pagingEnabled={true} showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
      <View style={styles.scrollContainer}>
      <View style={[styles.RecCard1]}> 
          <View style={styles.RecCardInfo1}>
            <Text style={styles.appointTitle1}>Tatoo Removal</Text>
            <Text style={styles.appointTitle2}>Israel Clinic</Text>
            <Text style={styles.appointInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum, mollitia. Cumque reiciendis repellendus exercitationem nam harum velit id nemo quos, non qui, officia itaque asperiores eos. Consequuntur asperiores, numquam deserunt doloribus similique consectetur at dignissimos laudantium ipsa facilis unde odit, iure nemo.</Text>
          </View>
        </View>
        <View style={[styles.RecCard1]}> 
          <View style={styles.RecCardInfo1}>
            <Text style={styles.appointTitle1}>Tatoo Removal</Text>
            <Text style={styles.appointTitle2}>Israel Clinic</Text>
            <Text style={styles.appointInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum, mollitia. Cumque reiciendis repellendus exercitationem nam harum velit id nemo quos, non qui, officia itaque asperiores eos. Consequuntur asperiores, numquam deserunt doloribus similique consectetur at dignissimos laudantium ipsa facilis unde odit, iure nemo.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
        <Pressable style={styles.hoverBtn}>
          <Icon name="pluscircle" size={60} color="#fff" />
        </Pressable>
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
  RecCardInfo1:{
    height:300,
    width:250,
    textAlign:'justify',
  },
  RecCard1:{
    flex:1,
    width: 330,
    height: 450,
    margin:20,
    borderRadius: 10,
    elevation:20,
    backgroundColor: '#1b2a41',
  },
  appointTitle1:{
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
    width:300,
    padding:10,
    textAlign:'left',
    fontFamily:'Inter',
    fontSize:14,
    color:'#fff'
  },
  hoverBtn:{
    bottom:-10,
    left:330,
  }
})