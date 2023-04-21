import {StyleSheet, Text, View, ScrollView, Pressable, Modal} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AddAppointment } from './AddProduct';

export default function PatientHome({navigation,route}: {navigation: any; route: any}) {
  const [AppointModalVisible, setAppointModalVisible] = useState(false);
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  return (
    <View>
      <Pressable onPress={() => setdrawerModalVisible(true)}>
      <View style={styles.welcome}>
        <Icon name="user" size={52} color="#131035" />
      </View>
      </Pressable>
      <Text style={styles.heading2}>Appointments and Services</Text>
      <Text style={styles.heading2}>Manage and Add New Appointment</Text>
      <Text style={styles.heading2}>Medical History</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={AppointModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setAppointModalVisible(!AppointModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={() => setAppointModalVisible(!AppointModalVisible)}>
              <Icon name='close'size={30}color={'#222'}/>
            </Pressable>
            <AddAppointment/>
          </View>
        </View>
      </Modal>
      <Modal
        animationType='fade'
        transparent={true}
        visible={drawerModalVisible}
        onRequestClose={() => {
          setdrawerModalVisible(!drawerModalVisible);
        }}>
        <View style={styles.drawerModal}>
          <View>
            <Pressable
              style={styles.drawerButton}
              onPress={() => setdrawerModalVisible(!drawerModalVisible)}>
              <Icon name="close" size={30} color={'#222'} />
            </Pressable>
              <Pressable><Text style={styles.drawerTxt}>Finacial Area</Text></Pressable>
              <Pressable><Text style={styles.drawerTxt}>About</Text></Pressable>
              <Pressable onPress={() => navigation.navigate('Login')}><Text style={styles.drawerTxt2}>Log Out</Text></Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.scrollContainer}>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Israel Clinic</Text>
              <Text style={styles.appointInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum,
                mollitia. Cumque reiciendis repellendus exercitationem nam harum
                velit id nemo quos, non qui, officia itaque asperiores eos.
                Consequuntur asperiores, numquam deserunt doloribus similique
                consectetur at dignissimos laudantium ipsa facilis unde odit,
                iure nemo.
              </Text>
            </View>
          </View>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Israel Clinic</Text>
              <Text style={styles.appointInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum,
                mollitia. Cumque reiciendis repellendus exercitationem nam harum
                velit id nemo quos, non qui, officia itaque asperiores eos.
                Consequuntur asperiores, numquam deserunt doloribus similique
                consectetur at dignissimos laudantium ipsa facilis unde odit,
                iure nemo.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.hoverBtn} onPress={() => setAppointModalVisible(true)}>
        <Icon name="pluscircle" size={60} color="#777" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  scrollContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 10,
    color: '#222',
    fontFamily: 'Inter',
    fontSize: 40,
  },
  heading2: {
    marginLeft: 10,
    color: '#888',
    fontFamily: 'Inter',
    fontSize: 20,
  },
  RecCardInfo1: {
    height: 300,
    width: 250,
    textAlign: 'justify',
  },
  RecCard1: {
    flex: 1,
    width: 330,
    height: 450,
    margin: 20,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  appointTitle1: {
    padding: 10,
    width: 300,
    fontFamily: 'Roboto-bold',
    fontSize: 50,
    color: '#222',
  },
  appointTitle2: {
    padding: 10,
    width: 300,
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#555',
  },
  appointInfo: {
    width: 300,
    padding: 10,
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#777',
  },
  hoverBtn: {
    bottom: -10,
    left: 330,
  },
  centeredView: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',

  },
  modalView: {
    height:400,
    width:350,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    top:10,
    left:140
  },
  drawerModal:{
    top:100,
    left:60,
    height:170,
    width:230,
    elevation:100,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    backgroundColor:'#f1f1f1'
  },
  drawerButton:{
    top:5,
    left:180
  },
  drawerTxt:{
    right:-10,
    fontSize:25,
    paddingBottom:30,
    color:'#222'
  },
  drawerTxt2:{
    fontSize:18,
    textAlign:'center',
    left:160,
    width:60,
    backgroundColor:'#f1f1f1',
    color:'#222'
  }
});
