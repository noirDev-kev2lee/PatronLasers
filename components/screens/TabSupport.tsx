import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

const TabSupport = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
        <Text
          style={{
            color: '#e6e6e9',
            fontSize: 25,
            paddingLeft: 15,
            paddingBottom: 10,
            paddingTop: 15,
          }}>
          Create a card
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput2}
          placeholderTextColor="#b4b9c1"
          placeholder="Serial Number"
        />
        <TextInput
          style={styles.textInput2}
          placeholderTextColor="#b4b9c1"
          placeholder="Card type"
        />
        <TextInput
          style={styles.textInput2}
          placeholderTextColor="#b4b9c1"
          placeholder="Card title"
        />
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.textInput3}
          placeholderTextColor="#b4b9c1"
          placeholder="Type your message..."
        />
      </View>
      <SubButton />
    </View>
  );
};

const SubButton = () => {
  return (
    <View style={styles.container2}>
      <View style={styles.buttons}>
        <Pressable
          style={styles.pressBtn}
          onPress={() => Alert.alert('Submitted')}>
          <Text style={styles.pressTxt}>Request</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TabSupport;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  textInput2: {
    padding: 10,
    margin: 10,
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#000',
    backgroundColor: '#e6e6e9',
    width: 380,
    height: 60,
    borderRadius: 8,
  },
  textInput3: {
    textAlignVertical: 'top',
    padding: 10,
    margin: 10,
    fontSize: 20,
    backgroundColor: '#e6e6e9',
    width: 380,
    height: 200,
    borderRadius: 8,
  },
  form: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressBtn: {
    borderRadius: 8,
    backgroundColor: '#e6e6e9',
    width: 250,
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
    flex: 1,
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    marginTop: 150,
  },
});
