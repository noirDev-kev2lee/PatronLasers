import {
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon3 from 'react-native-vector-icons/AntDesign';

export default function RegisterChoice({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#131035" barStyle="light-content" />
      <View>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate('Home')}>
          <Icon3
            style={styles.Arrow}
            name="arrowleft"
            size={30}
            color="#000000"
          />
        </Pressable>
      </View>
      <View style={{paddingLeft: 25}}>
        <Text style={styles.title}>Welcome To Patron Registration </Text>
        <Text style={styles.title2}>
          Please Choose What You want Us to know You as
        </Text>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.pressBtn, {borderColor: 'white'}]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.pressTxt, {color: 'white'}]}>Clinic</Text>
        </Pressable>
        <Pressable
          style={[styles.pressBtn, {backgroundColor: 'white'}]}
          onPress={() => navigation.navigate('Patient')}>
          <Text style={[styles.pressTxt, {color: '#131035'}]}>Patient</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#131035',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    top: 50,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    margin: 10,
    textAlign: 'left',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#e6e6e9',
  },
  title2: {
    margin: 10,
    width: 350,
    lineHeight: 40,
    fontFamily: 'Inter',
    fontSize: 23,
    color: 'grey',
    textAlign: 'left',
  },
  inputLog: {
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 350,
    height: 60,
    backgroundColor: '#f3f3f3',
  },
  inputPass: {
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    height: 60,
    width: 350,
    backgroundColor: '#f3f3f3',
  },
  textInput: {
    fontFamily: 'Roboto',
    padding: 10,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#f4f4f4',
    width: 250,
  },
  pressBtn: {
    margin: 10,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 50,
    width: 300,
    height: 60,
    justifyContent: 'center',
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontSize: 18,
  },
  pressBtn2: {
    right: -110,
  },
  pressTxt2: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#e6e6e9',
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
    color: 'white',
  },
});
