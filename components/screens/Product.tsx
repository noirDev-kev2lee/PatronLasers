import { Button, ScrollView, StyleSheet, Pressable, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import TabsAds from './TabAds'
import TabCustomer from './TabCustomer'
import TabGuide from './TabGuide'
import TabSupport from './TabSupport'
import React from 'react'                             
import ProductHome from './ProductHome';

const Tab = createBottomTabNavigator(); 

export default function Product({navigation}) {
  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerTitleAlign:'center',
        headerTintColor:'#fff',
        headerStyle:{backgroundColor:'#03045E',
                      borderBottomLeftRadius:100 
                    }
         }}>
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