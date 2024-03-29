import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import PatientHome from './PatientHome';
import PatientAds from './PatientAds';
import PatientProfile from './PatientProfile';
import {useRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Patient = () => {
  const route = useRoute();
  const data = route.params as {
    username: string;
    email: string;
    lastname: string;
    role: string;
    id: string;
  };
  const {username, email, lastname, id, role} = data;

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Advertisement') {
              iconName = focused ? 'globe' : 'globe';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if (route.name === 'My Customer') {
              iconName = focused ? 'users' : 'users';
            } else if (route.name === 'Tech Support') {
              iconName = focused ? 'cog' : 'cog';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#222',
          tabBarInactiveTintColor: '#777',
          headerStyle: {height: 40, backgroundColor: '#fff'},
          headerTintColor: '#222',
          headerShadowVisible: true,
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
        })}>
        {/* <Tab.Screen name="Advertisement" component={PatientAds} /> */}
        <Tab.Screen
          name="Home"
          component={PatientHome}
          initialParams={{username: username, email: email, lastname: lastname}}
        />
        <Tab.Screen
          name="Profile"
          component={PatientProfile}
          initialParams={{
            username: username,
            email: email,
            lastname: lastname,
            role: role,
            id: id,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Patient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
