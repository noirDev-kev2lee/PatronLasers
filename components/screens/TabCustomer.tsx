import React from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {Modal} from 'react-native';
import AddAppointment from './AddAppointment';
const TabCustomer = ({route, navigation}: {route: any; navigation: any}) => {
  const [AppointModalVisible, setAppointModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const data = route.params as {username: string};
  const {username} = data;

  const customerList = [
    {
      id: 0,
      first_name: 'Jane',
      last_name: 'Kunambi',
      age: 20,
      gender: 'Female',
      phone: '972541234567',
      email: 'info@user.com',
    },
    {
      id: 1,
      first_name: 'Jane',
      last_name: 'Kunambi',
      age: 20,
      gender: 'Female',
      phone: '972541234567',
      email: 'info@user.com',
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Kunambi',
      age: 20,
      gender: 'Female',
      phone: '972541234567',
      email: 'info@user.com',
    },
    {
      id: 3,
      first_name: 'Jane',
      last_name: 'Kunambi',
      age: 20,
      gender: 'Female',
      phone: '972541234567',
      email: 'info@user.com',
    },
    {
      id: 4,
      first_name: 'Jane',
      last_name: 'Kunambi',
      age: 20,
      gender: 'Female',
      phone: '972541234567',
      email: 'info@user.com',
    },
  ];
  const AppointmentList = [
    {
      id: 0,
      fname: 'jane',
      lname: 'kunambi',
      service: 'Hair Removal',
      start_date: 'Sun May 07 2023',
      end_date: 'Sun May 08 2023',
      start_time: '11:54',
      end_time: '12:54',
      status: 'Pending',
    },
    {
      id: 1,
      fname: 'Anna',
      lname: 'kituli',
      service: 'Hair Removal',
      start_date: 'Sun May 07 2023',
      end_date: 'Sun May 08 2023',
      start_time: '11:54',
      end_time: '12:54',
      status: 'Pending',
    },
    {
      id: 2,
      fname: 'Doris',
      lname: 'Hatibu',
      service: 'Hair Removal',
      start_date: 'Sun May 07 2023',
      end_date: 'Sun May 08 2023',
      start_time: '11:54',
      end_time: '12:54',
      status: 'Done',
    },
    {
      id: 3,
      fname: 'Paula',
      lname: 'Kajala',
      service: 'Hair Removal',
      start_date: 'Sun May 07 2023',
      end_date: 'Sun May 08 2023',
      start_time: '11:54',
      end_time: '12:54',
      status: 'Pending',
    },
    {
      id: 4,
      fname: 'Airah',
      lname: 'Rose',
      service: 'Hair Removal',
      start_date: 'Sun May 07 2023',
      end_date: 'Sun May 08 2023',
      start_time: '11:54',
      end_time: '12:54',
      status: 'Done',
    },
  ];
  const handleDonePress = () => {
    setModalVisible(false);
  };

  const handleCancelPress = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      {/* Done and cancel modal */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <Pressable style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalCloseIcon}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Icon name="close" size={25} color={'#222'} />
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[
                  styles.modalButton,
                  {marginBottom: 10, backgroundColor: 'green'},
                ]}
                onPress={handleDonePress}>
                <Text style={styles.modalBtnText}>Done</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, {backgroundColor: '#B30000'}]}
                onPress={handleCancelPress}>
                <Text style={styles.modalBtnText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      {/* Modal to add new appointment */}
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
              <Icon name="close" size={30} color={'#222'} />
            </Pressable>
            <AddAppointment clinicName={username} />
          </View>
        </View>
      </Modal>
      <View style={styles.createSec}>
        <Pressable
          onPress={() => navigation.navigate('addCustomer')}
          style={styles.createPress}>
          <Text style={styles.textPress}>Add Customer</Text>
          <Icon name="user" size={50} color={'white'} />
        </Pressable>
        <Pressable
          onPress={() => setAppointModalVisible(true)}
          style={styles.createPress}>
          <Text style={styles.textPress}>Add Appointment</Text>
          <Icon name="bars" size={50} color={'white'} />
        </Pressable>
      </View>
      <ScrollView horizontal pagingEnabled={true}>
        {/* customers list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>My Customers</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {customerList.map(customer => (
              <>
                <View key={customer.id} style={[styles.customerCard]}>
                  <View style={styles.customerImg}>
                    <Text style={styles.profileLetter}>
                      {customer.first_name.charAt(0)}
                    </Text>
                  </View>
                  <View style={styles.RecCardInfo}>
                    <View style={styles.infoGroup}>
                      <Text style={styles.RecCardTitle}>
                        {customer.first_name} {customer.last_name}
                      </Text>
                    </View>
                    <View style={styles.infoGroup}>
                      <Text style={styles.RecCardPara}>{customer.age}</Text>
                      <Text style={[styles.RecCardPara, {marginLeft: 15}]}>
                        {customer.gender}
                      </Text>
                    </View>
                    <View style={styles.infoGroup}>
                      <View>
                        <Text style={styles.RecCardPara}>{customer.phone}</Text>
                      </View>
                      <View>
                        <Text style={[styles.RecCardPara, {marginLeft: 15}]}>
                          {customer.email}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
              </>
            ))}
          </ScrollView>
        </View>
        {/* appointments list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>Appointments</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {AppointmentList.map(y => (
              <>
                <View key={y.id} style={[styles.RecCard]}>
                  <View style={styles.customerImg}>
                    <Text style={styles.profileLetter}>
                      {y.fname.charAt(0)}
                    </Text>
                  </View>
                  <View style={styles.RecCardInfo}>
                    <View style={styles.nameContainer}>
                      <Text style={styles.RecCardTitle}>
                        {y.fname} {y.lname}
                      </Text>
                      <Pressable onPress={() => setModalVisible(true)}>
                        <Icon name="ellipsis1" size={30} color="black" />
                      </Pressable>
                    </View>
                    <Text style={styles.subTitle}>{y.service}</Text>
                    <View style={styles.timeContainer}>
                      <View style={[styles.dateTimeCont, {marginRight: 20}]}>
                        <Icon2
                          style={{marginRight: 5}}
                          name="calendar"
                          size={20}
                          color={'green'}
                        />
                        <Text style={styles.startDateText}>{y.start_date}</Text>
                      </View>
                      <View style={styles.dateTimeCont}>
                        <Icon2
                          style={{marginRight: 5}}
                          name="clock-o"
                          size={25}
                          color={'green'}
                        />
                        <Text style={styles.startDateText}>{y.start_time}</Text>
                      </View>
                    </View>
                    <View style={styles.timeContainer}>
                      <View style={[styles.dateTimeCont, {marginRight: 20}]}>
                        <Icon2
                          style={{marginRight: 5}}
                          name="calendar"
                          size={20}
                          color={'#B30000'}
                        />
                        <Text style={styles.endDateText}>{y.start_date}</Text>
                      </View>
                      <View style={styles.dateTimeCont}>
                        <Icon2
                          style={{marginRight: 5}}
                          name="clock-o"
                          size={25}
                          color={'#B30000'}
                        />
                        <Text style={styles.endDateText}>{y.start_time}</Text>
                      </View>
                    </View>
                    <Text style={styles.RecCardPara}>{y.status}</Text>
                  </View>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
              </>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default TabCustomer;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8FAFB',
  },
  textPress: {
    marginBottom: 10,
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  createSec: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  createPress: {
    paddingTop: 40,
    alignItems: 'center',
    elevation: 10,
    borderRadius: 26,
    height: 150,
    width: 180,
    backgroundColor: '#131035',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  list: {
    marginTop: 50,
    width: 410,
  },
  listTitle: {
    fontFamily: 'poppins',
    fontSize: 23,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#131035',
  },
  listScroll: {
    height: 450,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  RecCard: {
    flexDirection: 'row',
    height: 200,
    backgroundColor: '#F8FAFB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  customerCard: {
    flexDirection: 'row',
    height: 140,
    backgroundColor: '#F8FAFB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  RecCardInfo: {
    height: 90,
    backgroundColor: '#F8FAFB',
    marginLeft: 20,
  },
  RecCardInfoTime: {
    top: 10,
    marginRight: 10,
    textAlign: 'right',
    color: 'green',
  },
  RecCardTitle: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#36454F',
  },
  subTitle: {
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 19,
    color: '#36454F',
  },
  RecCardTitle2: {
    fontFamily: 'poppins',
    fontSize: 15,
    color: '#333',
  },
  RecCardPara: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: '#222',
  },
  startDateText: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: 'green',
  },
  endDateText: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: '#B30000',
  },
  customerImg: {
    backgroundColor: '#131035',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  profileLetter: {
    color: '#fff',
    fontFamily: 'poppins',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 25,
  },
  customerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  dateTimeCont: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  prodImgSmallRec: {
    height: 70,
    width: 70,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    top: 60,
  },
  infoGroup: {
    flexDirection: 'row',
  },
  modalView: {
    height: 800,
    width: '95%',
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
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    top: 10,
    left: 140,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lineContainer: {
    paddingVertical: 0,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#131035',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 50,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  modalBtnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  modalCloseIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  modalButton: {
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 4,
  },
});
