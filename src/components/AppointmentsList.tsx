import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import api from '../utils/api';
interface appointmentListProps {
  username: string;
}
const AppointmentsList = ({username}: appointmentListProps) => {
  const [appointmentData, setAppointmentData] = useState<any[]>([]);
  const [isLimit, setIsLimit] = useState(false);
  useEffect(() => {
    api.get('appointments/').then(res => setAppointmentData(res.data.rows));
  }, []);
  const appointmentList = appointmentData.filter(
    x => x.clinic_name === username,
  );
  const addSession = async (appointment_data, id) => {
    const patient_id = appointment_data.patient_id;
    const res = await api.get('treatment-records/');
    const res_2 = await api.get('appointments/');
    const data = res.data.rows;
    const data_2 = res_2.data.rows;
    const list = data.filter(y => y.patient_id === patient_id);
    const list_2 = data_2.filter(y => y.id === id);
    const maxSession = list.reduce((maxNotification, notification) => {
      if (
        notification.session_number >
        (maxNotification ? maxNotification.session_number : 0)
      ) {
        return notification;
      }
      return maxNotification;
    }, null);
    if (list_2[0].no_sessions !== maxSession.session_number) {
      api.post('treatment-records/', {
        patient_id: patient_id,
        appt_id: appointment_data.appt_id,
        clinic_name: list[0].clinic_name,
        service_type: list[0].service_type,
        service_cost: list[0].service_cost,
        session_number: maxSession.session_number + 1,
      });
      
    } else {
      setIsLimit(true);
      console.log('you exceed limit');
    }
  };

  return (
    <View style={styles.list}>
      <ScrollView style={styles.listScroll}>
        {appointmentList.length === 0 ? (
          <View>
            <Text style={{color: 'red', paddingLeft: 10}}>
              No available appointments
            </Text>
          </View>
        ) : (
          <View>
            {appointmentList.map(y => (
              <View key={y.id}>
                <View style={[styles.RecCard]}>
                  <View style={styles.RecCardInfo}>
                    <View style={styles.nameContainer}>
                      <Text style={styles.RecCardTitle}>{y.patient_id}</Text>
                      {!isLimit && (
                        <TouchableOpacity
                          onPress={() => addSession(y, y.id)}
                          style={styles.sessionBtn}>
                          <Text style={{color: 'white'}}>Next session</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                    <Text style={styles.serviceTitle}>
                      Service: {y.service_type}
                    </Text>
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
                    <View style={styles.sessionContainer}>
                      <Text style={styles.statusText}>Active session 3</Text>
                      <Text style={styles.sessionText}>
                        Total Session(s): {y.no_sessions}
                      </Text>
                    </View>
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
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  RecCard: {
    flex: 1,
    flexDirection: 'row',
    width: 380,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginLeft: 15,
    height: 'auto',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCardInfo: {
    marginLeft: 10,
  },
  RecCardTitle: {
    fontFamily: 'Roboto',
    color: '#222',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  list: {
    width: width * 1,
  },
  listTitle: {
    fontFamily: 'Roboto',
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#131035',
    textTransform: 'uppercase',
  },
  listScroll: {
    height: height * 0.5,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  customerCard: {
    flexDirection: 'row',
    height: 140,
    backgroundColor: '#F8FAFB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  customerImg: {
    backgroundColor: '#131035',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  customerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  profileLetter: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 25,
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: 2,
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
  sessionText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'gray',
  },
  idTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#36454F',
  },
  infoGroup: {
    flexDirection: 'row',
  },
  dateTimeCont: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doneBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  serviceTitle: {
    fontSize: 19,
    color: '#36454F',
  },
  lineContainer: {
    paddingVertical: 25,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DADADA',
  },
  statusText: {
    fontFamily: 'Roboto',
    textTransform: 'capitalize',
    fontSize: 15,
    textAlign: 'left',
    color: '#222',
  },
  sessionContainer: {
    flexDirection: 'column',
    marginTop: 4,
  },
  sessionBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
export default AppointmentsList;
