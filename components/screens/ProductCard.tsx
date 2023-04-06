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
        <Text style={styles.prodTitle}>This is the title</Text>
        <Text style={styles.prodInfo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae minima id ex maxime omnis pariatur vel accusamus atque incidunt commodi minus, error sit. Rerum eum autem quis repellat dolores voluptas incidunt architecto itaque ratione cumque qui, voluptate velit voluptatum necessitatibus nam aspernatur expedita illo, explicabo vitae facere magnam deserunt omnis quaerat. Quae facere sequi voluptatum voluptates. Libero, debitis assumenda.</Text>
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
    borderRadius:50,
    elevation:80
  },
  prodImg:{
    height:350,
    width:350,
    alignItems:'center',
    resizeMode:'contain',
  },
  Info:{
    top:60,
    width:350,
    height:300,
    elevation:70,
  },
  prodTitle:{
    fontFamily:'Inter',
    fontSize:20
  },
  prodInfo:{

  }
})