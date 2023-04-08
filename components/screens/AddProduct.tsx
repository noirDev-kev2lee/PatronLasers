import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon3 from 'react-native-vector-icons/AntDesign';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

const AddProduct = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={styles.arrow}>
          <Icon3 name="arrowleft" size={30} color="#000000" />
        </View>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add New Product</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Serial Number"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Product Name"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  textInput: {
    paddingLeft: 20,
    margin: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#000',
    backgroundColor: '#e6e6e9',
    width: 350,
    height: 60,
    borderRadius: 12,
  },
  textInput3: {
    textAlignVertical: 'top',
    padding: 10,
    margin: 10,
    fontSize: 20,
    backgroundColor: '#e6e6e9',
    width: 350,
    height: 200,
    borderRadius: 8,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  pressBtn: {
    borderRadius: 12,
    backgroundColor: '#e6e6e9',
    width: 250,
    height: 60,
  },
  pressTxt: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#66666e',
  },
  pressTxt1: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eee0cb',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  title: {
    color: '#e6e6e9',
    fontSize: 25,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 15,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboard: {flex: 1, padding: 30},
  arrow: {
    color: 'white',
  },
});
