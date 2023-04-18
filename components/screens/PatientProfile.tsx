import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function PatientProfile() {
  return (
    <View>
      <View style={styles.profileHead}>
        <View style={styles.profileHeadImgContainer}>
          <Image
            style={styles.profileHeadImg}
            source={require('../assets/customer1.jpg')}
          />
        </View>
        <Text style={styles.profileHeadName}>Thuhiya Kunambi</Text>
        <Text style={styles.profileHeadEmail}>stepbro@example.com</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.profileBio}>
        <Text style={styles.bioHead}>Patient Bio</Text>
        <Text style={styles.bioInfo}>Gender : Female</Text>
        <Text style={styles.bioInfo}>Age : 36</Text>
        <Text style={styles.bioInfo}>Address : Temeke</Text>
        <Text style={styles.bioHead}>Medical History</Text>
        <Text style={styles.bioHead2}>Service 1</Text>
        <Text style={styles.bioInfo}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
          dolorem veniam, dolorum perspiciatis repellat repudiandae ex quasi
          blanditiis nisi magnam?
        </Text>
        <Text style={styles.bioHead2}>Service 2</Text>
        <Text style={styles.bioInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          natus labore sunt placeat quas similique.
        </Text>
        <Text style={styles.bioHead2}>Service 3</Text>
        <Text style={styles.bioInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          natus labore sunt placeat quas similique.
        </Text>
        <Text style={styles.bioHead2}>Service 4</Text>
        <Text style={styles.bioInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          natus labore sunt placeat quas similique.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHead: {
    marginBottom: 10,
    alignItems: 'center',
  },
  profileHeadImg: {
    height: 150,
    width: 150,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  profileHeadImgContainer: {
    margin: 20,
    borderRadius: 200,
    backgroundColor: '#fff',
    elevation: 30,
  },
  profileHeadName: {
    fontFamily: 'Roboto-Regular',
    fontSize: 25,
    color: '#222',
  },
  profileHeadEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#888',
  },
  profileBio: {
    height: 450,
    width: 400,
    marginHorizontal: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 10,
  },
  bioHead: {
    marginLeft: 5,
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#666',
  },
  bioHead2: {
    marginLeft: 5,
    marginBottom: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#222',
  },
  bioInfo: {
    marginLeft: 5,
    marginVertical: 3,
    fontFamily: 'Roboto-Thin',
    fontSize: 18,
    color: '#000',
  },
});
