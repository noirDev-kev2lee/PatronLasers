import { Button, ScrollView, StyleSheet, Pressable, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <Tab.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Advertisement') {
            iconName = focused ? 'globe' : 'globe-outline';
          }
          else if (route.name === 'Clinical Guides') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          }
          else if (route.name === 'My Customer') {
            iconName = focused ? 'people' : 'people-outline';
          }else if (route.name === 'Tech Support') {
            iconName = focused ? 'cog' : 'cog-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fca311',
        tabBarInactiveTintColor: '#202B31',
        headerStyle:{height:60,backgroundColor:'#03045e'},
        headerTintColor:'#FFF',
        headerShadowVisible:true,
        headerTitleAlign:'center',
        tabBarShowLabel:false,
        tabBarStyle:{borderColor:'#fff'}
      })}
      >
            <Tab.Screen name='Advertisement' component={TabsAds}/>
            <Tab.Screen name='Clinical Guides' component={TabGuide} />
            <Tab.Screen name='Home' component={ProductHome}/>
            <Tab.Screen name='My Customer' component={TabCustomer} />
            <Tab.Screen name='Tech Support' component={TabSupport} />
          </Tab.Navigator>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'}
})