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

const AddProduct = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View>
          <Pressable
            style={styles.backArrow}
            onPress={() => navigation.navigate('Product')}>
            <Icon3
              style={styles.Arrow}
              name="arrowleft"
              size={30}
              color="#000000"
            />
          </Pressable>
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
                placeholderTextColor="grey"
                placeholder="Serial Number"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
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
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 350,
    height: 60,
    backgroundColor: '#D9D9D9',
    paddingLeft: 25,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  pressBtn: {
    alignItems: 'center',
    left: 10,
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 350,
    height: 60,
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  pressTxt1: {
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
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 27,
    color: '#131035',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  keyboard: {flex: 1, padding: 30},
  arrow: {
    color: 'white',
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
    color: '#131035',
  },
});
