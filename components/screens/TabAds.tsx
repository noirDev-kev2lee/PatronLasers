import { StyleSheet,ScrollView, Pressable, Text, View, TouchableHighlight } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

 export default function TabAds ({ navigation }) {
    return (
        <View>
        <View><Text style={styles.scrollHeader}>My Products</Text></View>
      <ScrollView horizontal style={styles.scroll}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.push('Product Info')}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>Product One</Text>
        </View>
        </Pressable>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
      </View>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>Recommended</Text></View>
      <ScrollView horizontal style={styles.scroll}>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>Product One</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
      </View>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>Categories</Text></View>
      <ScrollView horizontal  style={styles.scroll}>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.cardText}>Product One</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
      </View>
      </ScrollView>
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