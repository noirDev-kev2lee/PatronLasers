import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,} from 'react-native-responsive-screen'
  import api from '../utils/api'
  
  const FinancialArea = ({route, navigation}: {route: any; navigation: any}) => {
    const [patientData, setPatientData] = useState<any[]>([]);
    const [appointmentData, setAppointmentData] = useState<any[]>([]);
    const data = route.params as {username: string};
    const {username} = data;
    useEffect(() => {
      api
        .get('patients/')
        .then(res => setPatientData(res.data.rows));
    }, [patientData]);
    useEffect(() => {
      api
        .get('appointments/')
        .then(res => setAppointmentData(res.data.rows));
    }, [appointmentData]);
  
    const patientList = patientData.filter(y => y.clinic_name === username);
    const appointmentList = appointmentData.filter(
      x => x.clinic_name === username,
    );
  return (
    <ScrollView horizontal pagingEnabled={true}>
        {/* customers list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>My Customers</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {patientList.length === 0 ? (
              <View>
                <Text style={{color: 'red', paddingLeft: 20}}>
                  No available customers
                </Text>
              </View>
            ) : (
              <View>
                {patientList.map((customer: any) => (
                  <View key={customer.id}>
                    <View style={[styles.customerCard]}>
                      <View style={styles.customerImg}>
                        <Text style={styles.profileLetter}>
                          {customer.first_name.charAt(0)}
                        </Text>
                      </View>
                      <View style={styles.RecCardInfo}>
                        <View style={styles.infoGroup}>
                          <Text style={styles.idTitle}>
                            {customer.patient_id}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <Text style={styles.RecCardTitle}>
                            {customer.first_name} {customer.last_name}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <Text style={styles.RecCardPara}>
                            Age:{customer.age}
                          </Text>
                          <Text
                            style={[
                              styles.RecCardPara,
                              {marginLeft: 15, textTransform: 'capitalize'},
                            ]}>
                            Gender:{customer.gender}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <View>
                            <Text style={styles.RecCardPara}>
                              +{customer.phone}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={[styles.RecCardPara, {marginLeft: 15}]}>
                              {customer.email}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.line} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        {/* appointments list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>Appointments</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {appointmentList.length === 0 ? (
              <View>
                <Text style={{color: 'red', paddingLeft: 20}}>
                  No available appointments
                </Text>
              </View>
            ) : (
              <View>
                {appointmentList.map(y => (
                  <View key={y.id}>
                    <View style={[styles.RecCard]}>
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
                         {y.job_status !== 'done' ? (
                          <View>

                          </View>
                         ): ''}
                        </View>
                        <Text style={styles.subTitle}>{y.service_type}</Text>
                        <View style={styles.timeContainer}>
                          <View
                            style={[styles.dateTimeCont, {marginRight: 20}]}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="calendar"
                              size={20}
                              color={'green'}
                            />
                            <Text style={styles.startDateText}>
                              {y.start_date}
                            </Text>
                          </View>
                          <View style={styles.dateTimeCont}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="clock-o"
                              size={25}
                              color={'green'}
                            />
                            <Text style={styles.startDateText}>
                              {y.start_time}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.timeContainer}>
                          <View
                            style={[styles.dateTimeCont, {marginRight: 20}]}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="calendar"
                              size={20}
                              color={'#B30000'}
                            />
                            <Text style={styles.endDateText}>{y.end_date}</Text>
                          </View>
                          <View style={styles.dateTimeCont}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="clock-o"
                              size={25}
                              color={'#B30000'}
                            />
                            <Text style={styles.endDateText}>{y.end_time}</Text>
                          </View>
                        </View>
                        <Text style={styles.RecCardPara}>{y.job_status}</Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.line} />
                    </View>
                    {/* Done and cancel modal */}
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
  </ScrollView>
  );
};

export default FinancialArea;
const { width, height } = Dimensions.get('window');
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
    height: height*0.5,
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
    textTransform: 'capitalize',
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
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#222',
    textTransform: 'capitalize',
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
    alignItems: 'center',
    top: 60,
  },
  infoGroup: {
    flexDirection: 'row',
  },
  modalView: {
    height: 650,
    width: '100%',
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
