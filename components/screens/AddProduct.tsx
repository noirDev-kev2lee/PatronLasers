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
export function AddCustomer(){
  return(
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Customer</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Address"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Email"
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
  )
}
export function AddAppointment(){
  return(
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Appointment</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Service Type"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Time"
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
  )
}
const AddProduct = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
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
    fontFamily: 'Roboto',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#e6e6e9',
    width: 300,
    height: 40,
    color: '#000',
    borderRadius: 12,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressBtn: {
    borderRadius: 12,
    backgroundColor: '#e6e6e9',
    width: 200,
    height: 50,
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

  },

  title: {
    textAlign:'center',
    color: '#222',
    fontSize: 25
  },
  keyboard: {flex: 1, padding: 30},
  arrow: {
    color: 'white',
  },
});
