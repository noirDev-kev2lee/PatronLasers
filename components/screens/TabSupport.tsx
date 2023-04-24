import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const TabSupport = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [cardType, onCardTpyeChange] = React.useState('');
  const [serialNumber, onSerialNumberChange] = React.useState('');
  const [cardTitle, onCardTitleChange] = React.useState('');
  const [desc, onDescChange] = React.useState('');

  const handleSupportRegister = async () => {
    try {
      if (
        cardType === '' ||
        cardTitle === '' ||
        serialNumber === '' ||
        desc === ''
      ) {
        Alert.alert('All field must be provided');
      } else {
        setLoading(true);
        // add to support table
        try {
          await axios.post('http://15.236.168.186:7000/api/v1/supports/', {
            clinic_id: 1235,
            serial_number: serialNumber,
            card_type: cardType,
            card_title: cardTitle,
            descriptions: 'hello',
          });
        } catch (err) {
           setLoading(false);
          Alert.alert('Error occurs!');
        }
      }
    } catch (error) {
      Alert.alert('Wrong email or password');
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
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={onSerialNumberChange}
                placeholder="Serial Number"
              />

              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={onCardTpyeChange}
                placeholder="Card type"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                onChangeText={onCardTitleChange}
                placeholder="Card title"
              />
              <TextInput
                multiline={true}
                numberOfLines={10}
                style={styles.textInput3}
                placeholderTextColor="#b4b9c1"
                onChangeText={onDescChange}
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
  },
  keyboard: {flex: 1, padding: 30},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
