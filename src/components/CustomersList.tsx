import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import api from '../utils/api';

interface customersListProps {
  username: string;
}
const CustomersList = ({username}: customersListProps) => {
  const [patientData, setPatientData] = useState<any[]>([]);

  useEffect(() => {
    api.get('patients/').then(res => setPatientData(res.data.rows));
  }, []);

  const patientList = patientData.filter(y => y.clinic_name === username);
  return (
    <View style={styles.list}>
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
              <TouchableOpacity key={customer.id}>
                <View style={[styles.customerCard]}>
                  <View style={styles.customerImg}>
                    <Text style={styles.profileLetter}>
                      {customer.first_name?.charAt(0)}
                    </Text>
                  </View>
                  <View style={styles.RecCardInfo}>
                    <View style={styles.infoGroup}>
                      <Text style={styles.idTitle}>{customer.patient_id}</Text>
                    </View>
                    <View style={styles.infoGroup}>
                      <Text style={styles.customerNames}>
                        {customer.first_name} {customer.last_name}
                      </Text>
                    </View>
                    <View style={styles.infoGroup}>
                      <Text style={styles.details}>Age:{customer.age}</Text>
                      <Text
                        style={[
                          styles.details,
                          {marginLeft: 15, textTransform: 'capitalize'},
                        ]}>
                        Gender:{customer.gender}
                      </Text>
                    </View>
                    <View style={styles.infoGroup}>
                      <View>
                        <Text style={styles.details}>{customer.phone}</Text>
                      </View>
                      <View>
                        <Text style={[styles.details, {marginLeft: 15}]}>
                          {customer.email}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  RecCardInfo: {
    marginLeft: 10,
  },
  list: {
    width: width * 1,
  },
  listTitle: {
    fontSize: 16,
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
    color: 'blue',
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
  },
  doneBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
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
  customerNames: {
    fontFamily: 'Roboto',
    color: '#222',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  details: {
    fontFamily: 'Roboto',
    textTransform: 'capitalize',
    fontSize: 16,
    textAlign: 'left',
    color: '#222',
  },
});

export default CustomersList;
