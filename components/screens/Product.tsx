import { Button, ScrollView, StyleSheet, Pressable, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabsAds from './TabAds'
import TabCustomer from './TabCustomer'
import TabGuide from './TabGuide'
import TabSupport from './TabSupport'
import ProductHome from './ProductHome'
import React from 'react'                             

const Tab = createBottomTabNavigator();

export default function Product({navigation}) {
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
            } else if (route.name === 'Clinical Guides') {
              iconName = focused ? 'medkit' : 'medkit';
            } else if (route.name === 'My Customer') {
              iconName = focused ? 'users' : 'users';
            } else if (route.name === 'Tech Support') {
              iconName = focused ? 'cog' : 'cog';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#eee0cb',
          tabBarInactiveTintColor: '#fff',
          headerStyle: {height: 40, backgroundColor: '#1b2a41'},
          headerTintColor: '#eee0cb',
          headerShadowVisible: true,
          headerTitleAlign: 'center',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Advertisement" component={TabsAds} />
        <Tab.Screen name="Clinical Guides" component={TabGuide} />
        <Tab.Screen name="Home" component={ProductHome} />
        <Tab.Screen name="My Customer" component={TabCustomer} />
        <Tab.Screen name="Tech Support" component={TabSupport} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
