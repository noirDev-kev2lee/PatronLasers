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
import api from '../utils/api';

const TabSupport = ({route}: {route: any}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [cardType, onCardTpyeChange] = React.useState('');
  const [cardTitle, onCardTitleChange] = React.useState('');
  const [desc, onDescChange] = React.useState('');

  const data = route.params as {username: string; lastname: string};
  const {username, lastname} = data;

  const handleSupportRegister = async () => {
    try {
      if (cardType === '' || cardTitle === '' || desc === '') {
        Alert.alert('All field must be provided');
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
              Alert.alert('Support sent');
              setLoading(false);
            });
        } catch (err) {
          setLoading(false);
          Alert.alert('Error occurs!');
        }
      }
    } catch (error) {
      Alert.alert('Internal Error occurs!');
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
    backgroundColor: 'white',
  },
  keyboard: {flex: 1, padding: 30},
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
