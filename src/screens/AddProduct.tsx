import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import CustomAlert from '../components/CustomAlert';
import api from '../utils/api';

const AddProduct = ({clinicName}: {clinicName: any}) => {
  const [serialNumber, setSerialNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message: React.SetStateAction<string>) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };



  const handleAddProduct = async () => {
    await api
      .post('purchases/', {
        serial_number: serialNumber,
        clinic_name: clinicName,
        product_name: productName,
      })
      .then(res => {
        const json = res.data;
        if (json.data.code === '23505') {
          showAlert('Product Already taken!');
        } else {
          showAlert('Product added successfuly!');
          setSerialNumber('');
          setProductName('');
        }
      })
      .catch(() => {
        showAlert('Error occurs!');
      });
  };
  return (
    <View>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add New Product</Text>
            </View>
            <View style={[styles.form, {height: 300}]}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                value={serialNumber}
                onChangeText={setSerialNumber}
                placeholder="Serial Number"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="grey"
                value={productName}
                onChangeText={setProductName}
                placeholder="Product Name"
              />
              <Pressable style={styles.pressBtn} onPress={handleAddProduct}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        {/* custom alert */}
        <CustomAlert visible={alertVisible} message={alertMessage} onClose={closeAlert} />
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
    paddingLeft: 20,
    width: 300,
    height: 60,
    color: '#000',
    borderRadius: 12,
  },
  dateText: {
    marginLeft: 10,
    color: '#222',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
  inputStyle: {
    margin: 10,
    flexDirection: 'row',
    borderRadius: 12,
    width: 300,
    height: 60,
    color: '#222',
    backgroundColor: '#D9D9D9',
  },
  datePicker: {
    left: 100,
    marginTop: 15,
  },
  form: {
    flex: 1,
    height: 600,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressBtn: {
    alignItems: 'center',
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 300,
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

  title: {
    textAlign: 'center',
    color: '#222',
    fontSize: 25,
    marginBottom: 10,
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

  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
