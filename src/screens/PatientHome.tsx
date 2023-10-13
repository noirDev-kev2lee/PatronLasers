import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import api from '../utils/api';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';


export default function PatientHome({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any[]>([]);
  const [patientData, setPatientData] = useState<any[]>([]);
  const data = route.params as {
    username: string;
    email: string;
    lastname: string;
  };
  const {username, email, lastname} = data;

try{
  useEffect(() => {
    const fetchPatient = async () =>{
     await api
     .get('patients/')
     .then(res => setPatientData(res.data.rows));
    }
    fetchPatient();
   }, []);
}catch(error){
return error
}
 try{

  useEffect(() => {
    const fetchAppointment = async () =>{
      await api
      .get('appointments/')
      .then(res => setAppointmentData(res.data.rows));
    }
    fetchAppointment()
  }, []);
 }catch(error){
 return error
 }

  const patientList = patientData.filter(y => y.email === email);
  const appointmentList = appointmentData.filter(
    x => x.patient_id === patientList[0]?.patient_id,
  );
  const pendingList = appointmentList.filter(
    pend => pend.job_status === 'pending',
  );
  const doneList = appointmentList.filter(done => done.job_status === 'done');
  

  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => setdrawerModalVisible(true)}>
        <View style={styles.welcome}>
          <Icon2 name="user-circle-o" size={42} color="#131035" />
          <Text style={styles.welcomeNote}>Hello, {username}</Text>
        </View>
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={drawerModalVisible}
        onRequestClose={() => {
          setdrawerModalVisible(!drawerModalVisible);
        }}>
        <View style={styles.drawerModal}>
          <View>
            <View>
              <Pressable
                style={styles.closeBntCont}
                onPress={() => setdrawerModalVisible(!drawerModalVisible)}>
                <Icon name="close" size={30} color={'#DADADA'} />
              </Pressable>
            </View>
            <View style={styles.drawerInfo}>
              <Icon2 name="user-circle-o" size={58} color="#DADADA" />
              <Text style={styles.drawerName}>
                {username} {lastname}
              </Text>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View>
              <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('About Us'),
                ]}>
                <View style={styles.drawerList}>
                  <Icon name="profile" size={28} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>About</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <View style={styles.drawerList}>
                  <Icon name="logout" size={28} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Sign out </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* pending appointment */}
      <View style={{paddingTop: 20}}>
        <Text style={styles.pendingText}>Pending Appointment</Text>
      </View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.scrollContainer}>
          {pendingList.length === 0 ? (
            <View>
              <Text style={styles.notAvailable}>No appointment available</Text>
            </View>
          ) : (
            <View>
              {pendingList.map(pending => (
                <View key={pending.id}>
                  <View style={[styles.RecCard1]}>
                    <View style={styles.RecCardInfo1}>
                      <Text style={styles.appointTitle1}>
                        Service:{pending.service_type}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        Clinic:{pending.clinic_name}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.start_date}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.end_date}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.start_time} - {pending.end_time}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        Status:{pending.job_status}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      {/* done appointment */}
      <View>
        <Text style={styles.doneText}>Done Appointment</Text>
      </View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.scrollContainer}>
          {doneList.length === 0 ? (
            <View>
              <Text style={styles.notAvailable}>No appointment available</Text>
            </View>
          ) : (
            <View>
              {doneList.map(pending => (
                <View key={pending.id}>
                  <View style={[styles.RecCard1]}>
                    <View style={styles.RecCardInfo1}>
                      <Text style={styles.appointTitle1}>
                        Service:{pending.service_type}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        Clinic:{pending.clinic_name}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.start_date}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.end_date}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        {pending.start_time} - {pending.end_time}
                      </Text>
                      <Text style={styles.appointTitle2}>
                        Status:{pending.job_status}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  mainContainer: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#F8FAFB',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  heading: {
    marginLeft: 10,
    color: '#222',
    fontFamily: 'Roboto',
    fontSize: 40,
  },
  heading2: {
    marginLeft: 10,
    color: '#888',
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  RecCardInfo1: {
    height: 300,
    width: 250,
  },
  RecCard1: {
    width: 330,
    height: 250,
    marginLeft: 20,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  appointTitle1: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 19,
    color: '#222',
  },
  appointTitle2: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: '#555',
  },
  appointInfo: {
    width: 300,
    padding: 10,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#777',
  },
  pendingText: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: 'red',
  },
  doneText: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: 'green',
  },
  floatingBtn: {
    bottom: 20,
    left: 290,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: 400,
    width: 350,
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
    top: 10,
    left: 140,
  },
  drawerModal: {
    top: 41,
    left: 0,
    height: '100%',
    width: 270,
    paddingHorizontal: 25,
    paddingVertical: 25,
    elevation: 100,
    backgroundColor: '#131035',
  },
  closeBntCont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  drawerInfo: {
    flexDirection: 'column',
  },
  drawerName: {
    fontFamily: 'Roboto',
    marginTop: 10,
    color: '#DADADA',
    fontSize: 20,
  },
  drawerTextCon: {
    paddingLeft: 20,
  },
  drawerList: {
    flexDirection: 'row',
    paddingBottom: 25,
  },
  lineContainer: {
    paddingVertical: 25,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DADADA',
  },
  drawerButton: {},
  drawerTxt: {
    fontSize: 20,
    color: '#DADADA',
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeNote: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
  notAvailable: {color: 'black', fontFamily: 'Roboto', fontSize: 18},
});
