import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import api from '../utils/api';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Line from '../components/Line';

const TreatmentRecords = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [records, setRecords] = useState<any[]>([]);
  const {patient_id} = route?.params;

  useEffect(() => {
    getTreatmentRecords();
  }, []);
  const getTreatmentRecords = async () => {
    const res = await api.get('treatment-records');
    setRecords(res.data.rows);
  };
  const patient_records = records.filter(y => y.patient_id === patient_id);
  console.log(patient_records);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E0DEDE" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrow}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Treatment Records</Text>
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={patient_records}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.profileBio}>
              <View style={styles.infoCon}>
                <Text style={styles.bioInfo1}>Clinic name</Text>
                <Text style={styles.bioInfo2}>{item.clinic_name}</Text>
              </View>
              <Line />
              <View style={styles.infoCon}>
                <Text style={styles.bioInfo1}>Service type</Text>
                <Text style={styles.bioInfo2}>{item.service_type}</Text>
              </View>
              <Line />
              <View style={styles.infoCon}>
                <Text style={styles.bioInfo1}>Service cost</Text>
                <Text style={[styles.bioInfo2, {textTransform: 'capitalize'}]}>
                  {item.service_cost}
                </Text>
              </View>
              <Line />
              <View style={styles.infoCon}>
                <Text style={styles.bioInfo1}>Number of session</Text>
                <Text style={styles.bioInfo2}>{item.session_number}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TreatmentRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0DEDE',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginBottom: 17,
  },
  backArrow: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardContainer: {
    marginBottom: 10,
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
