import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback
  
} from 'react-native';
import CustomAlert from './partials/CustomAlert';
import api from '../utils/api';

const TabSupport = ({route}: {route: any}) => {
  const [isLoading, setLoading] = useState(false);
  const [cardType, setCardType] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message: React.SetStateAction<string>) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleOptionSelect = (option:any) => {
    setCardType(option);
    setModalVisible(false);
  };
  

  const data = route.params as {username: string; lastname: string};
  const {username, lastname} = data;

  const handleSupportRegister = async () => {
    try {
      if (cardType === '' || cardTitle === '' || desc === '') {
        showAlert('All field must be provided');
      } else {
        setLoading(true);
        try {
          await api
            .post('supports/', {
              clinic_name: username,
              serial_number: lastname,
              card_type: cardType,
              card_title: cardTitle,
              descriptions: desc,
            })
            .then(() => {
             showAlert('Support Sent Successfuly! ');
             setCardType('');
             setCardTitle('');
             setDesc('');
              setLoading(false);
            });
        } catch (err) {
          setLoading(false);
         showAlert('Error occurs!');
        }
      }
    } catch (error) {
     showAlert('Internal Error occurs!');
      setLoading(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Create a card</Text>
            </View>
            <View style={styles.form}>
            <View style={styles.container2}>
              <TextInput
                style={styles.optionInput}
                placeholderTextColor="#b4b9c1"
                value={cardType}
                onChangeText={setCardType}
                placeholder="Card type"
                onFocus={() => setModalVisible(true)}
              />

              <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                  <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                      <Text style={styles.option} onPress={() => handleOptionSelect('Fault')}>Fault</Text>
                      <Text style={styles.option} onPress={() => handleOptionSelect('Technical Support')}>Technical Support</Text>
                      <Text style={styles.option} onPress={() => handleOptionSelect('Technical Support')}>Product Training</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
             </View>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={setCardTitle}
                value={cardTitle}
                placeholder="Card title"
              />
              <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.textInput3}
                placeholderTextColor="#b4b9c1"
                value={desc}
                onChangeText={setDesc}
                placeholder="Type your message..."
              />
              <Pressable
                style={styles.pressBtn}
                onPress={handleSupportRegister}>
                {isLoading ? (
                  <ActivityIndicator
                    color="white"
                    style={styles.activityIndicator}
                  />
                ) : (
                  <Text style={styles.pressTxt}>Submit</Text>
                )}
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
        {/* custom alert */}
        <CustomAlert visible={alertVisible} message={alertMessage} onClose={closeAlert} />
    </View>
  );
};

export default TabSupport;

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
    color: '#000',
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  pressBtn: {
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 350,
    height: 60,
    top: 20,
  },
  pressTxt: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'white',
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
    color: '#222',
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
    backgroundColor: 'white',
  },
  keyboard: {flex: 1, padding: 30},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
  // for select input
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionInput: {
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
   
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
    fontSize: 18,
    color: '#000',
  },
});
