import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.prodImgContainer}>
      <Image style={styles.prodImg} source={require('../assets/product1.png')}/>
      </View>
      <View style={styles.Info}>
        <Text>This is the title</Text>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  prodImgContainer:{
    top:40,
    height:380,
    width:350,
    backgroundColor:'#fff',
    borderRadius:50
  },
  prodImg:{
    height:350,
    width:350,
    alignItems:'center',
    resizeMode:'contain',
  },
  Info:{
    textAlign:'center'
  }
})