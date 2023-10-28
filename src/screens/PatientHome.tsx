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
  const [activeTab, setActiveTab] = useState('Appointments');
  const [service, setSercices] = useState<any[]>([]);

  try {
    useEffect(() => {
      fetchPatient();
      fetchAppointment();
      fetchServices();
    }, []);
  } catch (error) {
    return error;
  }
  const fetchServices = async () => {
    await api.get('clinic-services/').then(res => setSercices(res.data.rows));
  };
  const fetchPatient = async () => {
    await api.get('patients/').then(res => setPatientData(res.data.rows));
  };
  const fetchAppointment = async () => {
    await api
      .get('appointments/')
      .then(res => setAppointmentData(res.data.rows));
  };
  const patientList = patientData.filter(y => y.email === email);
  const appointmentList = appointmentData.filter(
    x => x.patient_id === patientList[0]?.patient_id,
  );
  console.log(patientList);
  const pendingList = appointmentList.filter(
    pend => pend.job_status === 'pending',
  );
  const doneList = appointmentList.filter(done => done.job_status === 'done');
  const serviceList = service.filter(
    y => y.clinic_name === patientList[0]?.clinic_name,
  );
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 18,
          paddingVertical: 10,
        }}>
        <Pressable onPress={() => setdrawerModalVisible(true)}>
          <View style={styles.welcome}>
            <Icon2 name="user-circle-o" size={42} color="#131035" />
            <Text style={styles.welcomeNote}>Hello, {username}</Text>
          </View>
        </Pressable>
      </View>

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
                  navigation.navigate('treatment_records', {
                    patient_id: patientList[0].patient_id,
                  }),
                ]}>
                <View style={styles.drawerList}>
                  <Icon name="profile" size={28} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>My records</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('notification', {status: 'patient'}),
                ]}>
                <View style={styles.drawerList}>
                  <Icon name="bells" size={28} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Notifications</Text>
                  </View>
                </View>
              </Pressable>
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
      <View style={styles.tabContainer}>
        <Pressable onPress={() => setActiveTab('Appointments')}>
          <View
            style={[
              styles.tabItem,
              activeTab === 'Appointments' && styles.activeTabItem,
            ]}>
            <Text style={styles.tabText}>Appointments</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('Services')}>
          <View
            style={[
              styles.tabItem,
              activeTab === 'Services' && styles.activeTabItem,
            ]}>
            <Text style={styles.tabText}>Services</Text>
          </View>
        </Pressable>
      </View>
      {activeTab === 'Services' && (
        <View style={{paddingHorizontal: 20, paddingTop: 30}}>
          <ScrollView
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}>
            {serviceList.map((value, index) => (
              <View key={index} style={styles.serviceContainer}>
                <View style={{marginBottom: 10}}>
                  <Text style={styles.serviceText}>Service</Text>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {value.service_name}
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text style={styles.serviceText}>Description</Text>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {value.service_desc}
                  </Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text style={styles.serviceText}>Cost</Text>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {value.service_cost}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      {activeTab === 'Appointments' && (
        <View>
          {/* pending appointment */}
          <View style={styles.heading}>
            <Text style={styles.pendingText}>Pending Appointment</Text>
          </View>
          <ScrollView
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.scroll}>
            <View style={styles.scrollContainer}>
              {pendingList.length === 0 ? (
                <View style={{paddingHorizontal: 20}}>
                  <Text style={styles.notAvailable}>
                    No appointment available
                  </Text>
                </View>
              ) : (
                <View>
                  {pendingList.map(pending => (
                    <View key={pending.id}>
                      <View style={[styles.RecCard1]}>
                        <View>
                          <Text style={styles.appointTitle1}>Service</Text>
                          <Text style={styles.appointTitle2}>
                            {pending.service_type}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.appointTitle1}>Clinic</Text>
                          <Text style={styles.appointTitle2}>
                            {pending.clinic_name}
                          </Text>
                        </View>

                        <Text style={styles.appointTitle2}>
                          {pending.start_date} - {pending.end_date}
                        </Text>
                        <Text style={styles.appointTitle2}>
                          {pending.start_time} - {pending.end_time}
                        </Text>
                        <Text style={styles.appointTitle2}>
                          Status:{pending.job_status}
                        </Text>
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
                  <Text style={styles.notAvailable}>
                    No appointment available
                  </Text>
                </View>
              ) : (
                <View>
                  {doneList.map(pending => (
                    <View key={pending.id}>
                      <View style={[styles.RecCard1]}>
                        <View>
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  mainContainer: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
  },

  heading2: {
    marginLeft: 10,
    color: '#888',
    fontFamily: 'Roboto',
    fontSize: 20,
  },

  RecCard1: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  appointTitle1: {
    fontWeight: '600',
    fontSize: 19,
    color: 'gray',
  },
  appointTitle2: {
    fontSize: 19,
    color: '#222',
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
  tabText: {
    color: 'black',
    fontSize: 17,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 70,
  },
  tabItem: {
    alignItems: 'center',
    padding: 16,
  },
  activeTabItem: {
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },

  activeTabText: {
    color: 'red',
  },
  heading: {paddingTop: 20, paddingHorizontal: 20},
  serviceContainer: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    color: 'gray',
  },
  serviceDesc: {
    fontSize: 14,
    color: 'gray',
  },
  serviceCost: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
