import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import api from '../utils/api';

const Notification = ({navigation, route}: {navigation: any; route: any}) => {
  const {status, user_id} = route.params;

  const [userNotification, setUserNotification] = useState<any[]>([]);

  useEffect(() => {
    getNotifications();
  });

  const getNotifications = async () => {
    try {
      if (status === 'clinic') {
        const res = await api.get('clinic-notifications');
        const data = res.data.rows;
        const notifications = data.filter(y => y.clinic_name === user_id);
        setUserNotification(notifications);
      }
      if (status === 'patient') {
        const res = await api.get('patient-notifications');
        const data = res.data.rows;
        const notifications = data.filter(y => y.patient_id === user_id);
        setUserNotification(notifications);
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrow}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
      </View>
      <FlatList
        data={userNotification}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notification_title}>{item.title}</Text>
            <Text style={styles.msg}>{item.message}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    marginBottom: 17,
  },
  backArrow: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  notification_title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 19,
  },
  msg: {
    color: 'black',
  },
});

export default Notification;
