import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PatientProfile({route}) {
  const [patientData, setPatientData] = React.useState<any[]>([]);

  const data = route.params as {username: string; email: string};
  const {username, email} = data;
  const firstLetter = username.charAt(0);

  React.useEffect(() => {
    axios
      .get('http://15.236.168.186:7000/api/v1/patients/')
      .then(res => setPatientData(res.data.rows));
  }, []);

  const singlePatient = patientData.filter(y => y.email === email);

  return (
    <View style={styles.container}>
      <View style={styles.profileHead}>
        <View style={styles.profileHeadImgContainer}>
          <Text style={styles.profileLetter}>{firstLetter.toUpperCase()}</Text>
        </View>
        {singlePatient.length === 0 ? (
          <View>
            <Text style={{color: '#000'}}>Data is loading ....</Text>
          </View>
        ) : (
          <View>
            {singlePatient.map(profile => (
              <View key={profile.id}>
                <Text style={styles.profileHeadName}>
                  {profile.first_name} {profile.last_name}
                </Text>
                <Text style={styles.profileHeadEmail}>
                  {profile.clinic_name}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
      {singlePatient.length === 0 ? (
        <View>
          <Text style={{color: '#000'}}>Data loading......</Text>
        </View>
      ) : (
        <View>
          {singlePatient.map(x => (
            <View key={x.id}>
              <View style={styles.profileBio}>
                <View style={styles.infoCon}>
                  <Text style={styles.bioInfo1}>Email</Text>
                  <Text style={styles.bioInfo2}>{x.email}</Text>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
                <View style={styles.infoCon}>
                  <Text style={styles.bioInfo1}>Age</Text>
                  <Text style={styles.bioInfo2}>{x.age}</Text>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
                <View style={styles.infoCon}>
                  <Text style={styles.bioInfo1}>Gender</Text>
                  <Text style={styles.bioInfo2}>{x.gender}</Text>
                </View>
                <View style={styles.lineContainer}>
                  <View style={styles.line} />
                </View>
                <View style={styles.infoCon}>
                  <Text style={styles.bioInfo1}>Phone</Text>
                  <Text style={styles.bioInfo2}>{x.phone}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={styles.profileBio}>
        <View style={styles.iconText}>
          <Icon name="ios-medkit-outline" size={25} color="#F54D42" />
          <View style={styles.infoCon}>
            <View style={{paddingLeft: 10}}>
              <Text style={styles.bioInfo1}>Appointmemt(s)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.profileBio}>
        <View style={[styles.iconText, {marginBottom: 18}]}>
          <Icon name="lock-closed" size={25} color="#2D4059" />
          <View style={styles.infoCon}>
            <View style={{paddingLeft: 10}}>
              <Text style={styles.bioInfo1}>Change password</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconText}>
          <Icon name="ios-help-sharp" size={25} color="#FFB400" />
          <View style={styles.infoCon}>
            <View style={{paddingLeft: 10}}>
              <Text style={styles.bioInfo1}>Help</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#F8FAFB', paddingHorizontal: 25},
  profileLetter: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 49,
  },
  profileHead: {
    marginBottom: 10,
    alignItems: 'center',
  },

  profileHeadImgContainer: {
    margin: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
    backgroundColor: '#131035',
    elevation: 30,
  },
  profileHeadName: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  profileHeadEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#888',
  },
  bioHead: {
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#666',
  },
  bioHead2: {
    marginBottom: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#222',
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
  lineContainer: {
    paddingVertical: 8,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DADADA',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
