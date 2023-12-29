import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  View,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import api from '../utils/api';
import Icon from 'react-native-vector-icons/AntDesign';

import AddAppointment from './AddAppointment';
import AddCustomer from './AddCustomer';
import CustomersList from '../components/CustomersList';
import AppointmentsList from '../components/AppointmentsList';

interface tabCustomerProps {
  route: any;
}

const TabCustomer = ({route}: tabCustomerProps) => {
  const [AppointModalVisible, setAppointModalVisible] = useState(false);
  const [CustomerModalVisible, setCustomerModalVisible] = useState(false);

  const data = route.params as {username: string};
  const {username} = data;

  // const handleDonePress = async (appointData: any) => {
  //   await api
  //     .put(`appointments/${appointData.id}`, {
  //       id: appointData.id,
  //       appt_id: appointData.appt_id,
  //       patient_id: appointData.patient_id,
  //       clinic_name: appointData.clinic_name,
  //       fname: appointData.fname,
  //       lname: appointData.lname,
  //       service_type: appointData.service_type,
  //       start_date: appointData.start_date,
  //       start_time: appointData.start_time,
  //       end_date: appointData.end_date,
  //       end_time: appointData.end_time,
  //       job_status: 'done',
  //     })
  //     .then(res => {
  //       const json = res.data;
  //       if (json.data.code === '23503') {
  //         Alert.alert('Patient ID does not exist!');
  //       } else {
  //         Alert.alert('Set done Successfully!');
  //       }
  //     })
  //     .catch(() => {
  //       Alert.alert('Error occurs!');
  //     });
  // };

  return (
    <View style={styles.mainContainer}>
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
              <Icon name="close" size={30} color={'#222'} />
            </Pressable>
            <AddCustomer />
          </View>
        </View>
      </Modal>

      {/* PRESSABLE CONTAINER */}
      <View style={styles.createSec}>
        <Pressable
          onPress={() => setCustomerModalVisible(true)}
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
        <CustomersList username={username} />
        {/* appointments list */}
        <AppointmentsList username={username} />
      </ScrollView>
    </View>
  );
};

export default TabCustomer;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8FAFB',
    flex: 1,
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
    width: wp('42%'),
    backgroundColor: '#131035',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  list: {
    marginTop: 50,
    width: width * 1,
  },
  listTitle: {
    fontFamily: 'Roboto',
    fontSize: 23,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#131035',
  },
  listScroll: {
    height: height * 0.5,
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
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#36454F',
  },
  idTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#36454F',
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 19,
    color: '#36454F',
  },
  RecCardTitle2: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#333',
  },
  RecCardPara: {
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#222',
  },
  startDateText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'green',
  },
  endDateText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#B30000',
  },
  endDateText2: {
    textAlign: 'right',
    bottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'blue',
  },
  endDateText3: {
    textAlign: 'right',
    bottom: 0,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#888',
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
    fontFamily: 'Roboto',
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
    top: 0,
  },
  infoGroup: {
    flexDirection: 'row',
  },
  modalView: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 40,
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
    top: 0,
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
    fontFamily: 'Roboto',
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
  doneBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
