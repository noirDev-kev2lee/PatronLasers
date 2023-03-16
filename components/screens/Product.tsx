import { Button, ScrollView, StyleSheet, Pressable, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import TabsAds from './TabAds'
import TabCustomer from './TabCustomer'
import TabGuide from './TabGuide'
import TabSupport from './TabSupport'
import React from 'react'
import Register from './Register';

const Tab = createBottomTabNavigator(); 

export default function Product({navigation}) {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
            <Tab.Screen name='Advertisement' component={TabsAds} />
            <Tab.Screen name='Clinical Guides' component={TabGuide} />
            <Tab.Screen name='My Customer' component={TabCustomer} />
            <Tab.Screen name='Tech Support' component={TabSupport} />
          </Tab.Navigator>
      </View>
  )
}


const styles = StyleSheet.create({
  scroll:{
    marginBottom:10,
  },
  scrollHeader:{
    fontSize:20,
    fontWeight:'900',
    padding:10,
    textTransform:'uppercase',
    color:'#03045E',
    textAlign:'left',
  },
  container:{
    flex:1,
    flexDirection:'row'
  },
  card:{
    justifyContent:'flex-start',
    alignItems:'center',
    width: 150,
    height: 190,
    margin: 5,
    borderRadius: 5,
  },
  cardText:{
    color:'black',
  },
  card1:{
    backgroundColor: '#FFF',
  },
  card2:{
    backgroundColor:'#FFF',
  },
  card3:{
    backgroundColor:'#FFF',
  }
})