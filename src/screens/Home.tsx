import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';

export default function Home({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#131035" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <View>
          <Image style={styles.logo} source={require('../assets/001.png')} />
        </View>
      </View>
      <Pressable
        style={styles.pressBtnReg}
        onPress={() => navigation.navigate('Register_choice')}>
        <Text style={[styles.pressTxt, {color: 'white'}]}>Register</Text>
      </Pressable>
      <Pressable
        style={styles.pressBtnLog}
        onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.pressTxt, {color: '#131035'}]}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131035',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 30,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  pressBtnLog: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 50,
    width: 300,
    height: 60,
    justifyContent: 'center',
  },
  pressBtnReg: {
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#131035',
    elevation: 50,
    width: 300,
    height: 60,
    justifyContent: 'center',
  },
  pressTxt: {
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 17,
    textAlign: 'center',
  },
});
