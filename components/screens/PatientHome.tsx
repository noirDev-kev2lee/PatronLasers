import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {AddAppointment} from './AddProduct';
import Icon2 from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';

export default function PatientHome({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const [AppointModalVisible, setAppointModalVisible] = useState(false);
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  const data = route.params as {username: string};
  const {username} = data;
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => setdrawerModalVisible(true)}>
        <View style={styles.welcome}>
          <Icon2 name="person-circle" size={52} color="#131035" />
          <Text style={styles.welcomeNote}>Hello, {username}</Text>
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={AppointModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setAppointModalVisible(!AppointModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={() => setAppointModalVisible(!AppointModalVisible)}>
              <Icon name="close" size={30} color={'#222'} />
            </Pressable>
            <AddAppointment />
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={drawerModalVisible}
        onRequestClose={() => {
          setdrawerModalVisible(!drawerModalVisible);
        }}>
        <View style={styles.drawerModal}>
          <View>
            <Pressable
              style={styles.drawerButton}
              onPress={() => setdrawerModalVisible(!drawerModalVisible)}>
              <View style={styles.closeBntCont}>
                <Icon name="close" size={30} color={'#222'} />
              </View>
            </Pressable>
            {/* <Pressable>
              <Text style={styles.drawerTxt}>Finacial Area</Text>
            </Pressable> */}
            <Pressable>
              <Text style={styles.drawerTxt}>About</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.drawerTxt2}>Sign Out</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* pending appointment */}
      <View>
        <Text style={styles.pendingText}>Pending Appointment</Text>
      </View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.scrollContainer}>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Service: Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Clinic: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Date: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Status: Pending</Text>
            </View>
          </View>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Service: Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Clinic: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Date: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Status: Pending</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* done appointment */}
      <View>
        <Text style={styles.doneText}>Done Appointment</Text>
      </View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.scrollContainer}>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Service: Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Clinic: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Date: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Status: Done</Text>
            </View>
          </View>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Service: Tatoo Removal</Text>
              <Text style={styles.appointTitle2}>Clinic: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Date: Israel Clinic</Text>
              <Text style={styles.appointTitle2}>Status: Done</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={styles.floatingBtn}
        onPress={() => setAppointModalVisible(true)}>
        <Icon name="pluscircle" size={60} color="#777" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  mainContainer: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: '#F8FAFB',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 10,
    color: '#222',
    fontFamily: 'Inter',
    fontSize: 40,
  },
  heading2: {
    marginLeft: 10,
    color: '#888',
    fontFamily: 'Inter',
    fontSize: 20,
  },
  RecCardInfo1: {
    height: 300,
    width: 250,
    textAlign: 'justify',
  },
  RecCard1: {
    flex: 1,
    width: 330,
    height: 200,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  appointTitle1: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 19,
    color: '#222',
  },
  appointTitle2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 19,
    color: '#555',
    textAlign: 'justify',
  },
  appointInfo: {
    width: 300,
    padding: 10,
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#777',
  },
  pendingText: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: 'red',
  },
  doneText: {
    fontFamily: 'Roboto',
    fontSize: 19,
    color: 'green',
  },
  floatingBtn: {
    bottom: 20,
    left: 290,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    height: 400,
    width: 350,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    top: 10,
    left: 140,
  },
  drawerModal: {
    top: 100,
    left: 60,
    height: 170,
    width: 230,
    elevation: 100,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 25,
    paddingVertical: 12,
  },
  closeBntCont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  drawerButton: {},
  drawerTxt: {
    right: -10,
    fontSize: 25,
    paddingBottom: 30,
    color: '#222',
  },
  drawerTxt2: {
    fontSize: 18,
    backgroundColor: '#f1f1f1',
    color: '#222',
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeNote: {
    fontSize: 15,
    color: 'black',
  },
});
