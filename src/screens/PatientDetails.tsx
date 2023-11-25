import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Line from '../components/Line';
import api from '../utils/api';

interface detailsProps {
  navigation: NavigationProp<ParamListBase>;
}
const PatientDetails = ({navigation, route}: detailsProps) => {
  const {patientData} = route.params;
  const [appointmentData, setAppointmentData] = useState<any[]>([]);
  useEffect(() => {
    api.get('appointments/').then(res => setAppointmentData(res.data.rows));
  }, []);
  const appointmentList = appointmentData.filter(
    x => x.patient_id === patientData.patient_id,
  );
  const sumOfSessionPrices = appointmentList.reduce(
    (accumulator, appointment) => {
      const sessionPrice = parseFloat(appointment.session_price);
      return accumulator + sessionPrice;
    },
    0,
  );
  console.log(sumOfSessionPrices);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon3
            style={styles.Arrow}
            name="arrowleft"
            size={25}
            color="#000000"
          />
        </Pressable>
        <Text style={styles.heading}>Patient details</Text>
      </View>
      <View style={styles.profileBio}>
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Name</Text>
          <Text style={styles.bioInfo2}>
            {patientData.first_name}
            {patientData.last_name}
          </Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Gender</Text>
          <Text style={[styles.bioInfo2, {textTransform: 'capitalize'}]}>
            {patientData.gender}
          </Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Date of birth</Text>
          <Text style={[styles.bioInfo2, {textTransform: 'capitalize'}]}>
            {patientData.dob}
          </Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Phone</Text>
          <Text style={[styles.bioInfo2, {textTransform: 'capitalize'}]}>
            {patientData.phone}
          </Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Email</Text>
          <Text style={styles.bioInfo2}>{patientData.email}</Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Total cost</Text>
          <Text style={styles.bioInfo2}>{sumOfSessionPrices}</Text>
        </View>
        <Line />
        <View style={styles.infoCon}>
          <Text style={styles.bioInfo1}>Number of appointment(s)</Text>
          <Text style={styles.bioInfo2}>{appointmentList.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 30,
  },
  heading: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },

  Arrow: {
    fontSize: 30,
  },
  profileBio: {
    height: 'auto',
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 12,
  },
  bioInfo1: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: '#000',
  },
  bioInfo2: {
    fontFamily: 'Roboto',
    fontSize: 17,
    color: '#AAAAAA',
  },
  infoCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
