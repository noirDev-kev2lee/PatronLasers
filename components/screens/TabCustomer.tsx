import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Modal } from 'react-native';
import {AddAppointment, AddCustomer} from './AddProduct';
const TabCustomer = () => {
  const [CustomerModalVisible, setCustomerModalVisible] = useState(false);
  const [AppointModalVisible, setAppointModalVisible] = useState(false);
  const customerList = [
    {
      id: 0,
      name: 'Jane Kunambi',
      img: require('../assets/customer1.jpg'),
      desc: 'This is customer one',
    },
    {
      id: 1,
      name: 'Anna Kituli',
      img: require('../assets/customer2.jpg'),
      desc: 'This is customer two',
    },
    {
      id: 2,
      name: 'Doris Hatibu',
      img: require('../assets/customer3.jpg'),
      desc: 'This is customer three',
    },
    {
      id: 3,
      name: 'Paula Kajala',
      img: require('../assets/customer2.jpg'),
      desc: 'This is customer four',
    },
    {
      id: 4,
      name: 'Airah Rose',
      img: require('../assets/customer1.jpg'),
      desc: 'This is customer four',
    },
  ];
  return (
    <View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={CustomerModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setCustomerModalVisible(!CustomerModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={() => setCustomerModalVisible(!CustomerModalVisible)}>
              <Icon name='close'size={30}color={'#222'}/>
            </Pressable>
            <AddCustomer/>
          </View>
        </View>
      </Modal>
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
      <View style={styles.createSec}>
        <Pressable onPress={() => setCustomerModalVisible(true)} style={styles.createPress}>
          <Text style={styles.textPress}>Add Customer</Text>
          <Icon name='user'size={50}color={'#222'}/>
        </Pressable>
        <Pressable onPress={() => setAppointModalVisible(true)} style={styles.createPress}>
          <Text style={styles.textPress}>Add Appointment</Text>
          <Icon name='bars'size={50}color={'#222'}/>
        </Pressable>
      </View>
      <ScrollView horizontal pagingEnabled={true}>
      <View style={styles.list}>
        <View style={styles.customerHeader}>
          <Icon name={'left'} size={30} color={'#222'} />
          <Text style={styles.listTitle}>My Customers</Text>
          <Icon name={'right'} size={30} color={'#222'} />
        </View>
        <ScrollView style={styles.listScroll}>
          {customerList.map(customer => (
            <View key={customer.id} style={[styles.RecCard]}>
              <View style={styles.RecCardInfo}>
                <Text style={styles.RecCardTitle}>{customer.name}</Text>
                <Text style={styles.RecCardPara}>{customer.desc}</Text>
              </View>
              <View style={styles.customerImg}>
                <Image style={styles.prodImgSmallRec} source={customer.img} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.list}>
        <View style={styles.customerHeader}>
          <Icon name={'left'} size={30} color={'#222'} />
          <Text style={styles.listTitle}>Appointments</Text>
          <Icon name={'right'} size={30} color={'#fff'} />
        </View>
        <ScrollView style={styles.listScroll}>
          {customerList.map(customer => (
            <View key={customer.id} style={[styles.RecCard]}>
              <View style={styles.RecCardInfo}>
                <Text style={styles.RecCardTitle}>{customer.name}</Text>
                <Text style={styles.RecCardPara}>{customer.desc}</Text>
              </View>
              <View style={styles.customerImg}>
                <Image style={styles.prodImgSmallRec} source={customer.img} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  );
};

export default TabCustomer;

const styles = StyleSheet.create({
  textPress: {
    marginBottom: 10,
    fontFamily: 'Roboto',
    textAlign:'center',
    fontSize: 20,
    color: '#222',
  },
  createSec: {
    marginTop:20,
    flexDirection: 'row',
    backgroundColor: 'f6f6f6',
  },
  createPress: {
    paddingTop: 40,
    alignItems:'center',
    elevation: 10,
    marginHorizontal: 10,
    borderRadius: 26,
    height: 150,
    width: 180,
    backgroundColor: '#f3f3f3',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  list: {
    marginTop:50
  },
  listTitle: {
    fontFamily: 'Inter',
    fontSize: 25,
    width:300,
    marginBottom: 10,
    textAlign: 'center',
    color: '#222'
  },
  listScroll: {
    height: 450,
    paddingBottom: 30,
    marginHorizontal:10,
    flexDirection: 'column',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  RecCard: {
    flexDirection: 'row-reverse',
    height: 120,
    alignItems:'center',
    marginBottom:30,
    elevation: 10,
    borderRadius: 12,
    backgroundColor: '#f3f3f3',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  RecCardInfo: {
    height: 90,
    width:200,
    marginLeft:60,
    textAlign:'justify',
    backgroundColor: '#f3f3f3'
  },
  RecCardTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#777'
  },
  RecCardPara: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    color: '#222'
  },
  customerImg: {
    alignItems: 'center'
  },
  customerHeader: {
    flexDirection: 'row',
    marginHorizontal:20

  },
  prodImgSmallRec: {
    height: 70,
    width: 70,
    borderRadius: 100,
    resizeMode: 'contain',
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
