import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NativeStackView from '@react-navigation/native-stack'
import React from 'react'

const function ProductCard({navigation}) {
  return (
    <View>
      <Text style={styles.text}>ProductCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    top:50,
    fontSize:220,
    color:'#000'
  }
})