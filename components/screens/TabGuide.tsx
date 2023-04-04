import { StyleSheet,ScrollView, Pressable, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-ionicons'
import BottomTabBar from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const TabGuide = ({navigation}) => {
  return (
    <View>
      <View><Text style={styles.scrollHeader}>My Products Guides</Text></View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
      <View style={styles.container}>
        <Pressable onPress={() =>navigation.navigate('Guide Info')}>
      <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product One</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product1.png')}/>
        </View>
        </Pressable>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Two</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product2.png')}/>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Three</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product4.png')}/>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Four</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/1-7.png')}/>
        </View>
      </View>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>More Product Guides</Text></View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.containersec}>
      <View>
      <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product One</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product3.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        </View>
        </ScrollView>
        </View>
  )
}

export default TabGuide

const styles = StyleSheet.create({
  scroll:{
  },
  scrollsec:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  scrollHeader:{
    fontFamily:'Inter',
    fontSize:20,                                                                                      
    textTransform:'uppercase',
    textAlign:'left',
    marginTop:5,
    marginBottom:10,
    color:'#eee0cb',
  },
  container:{
    flex:1,
    flexDirection:'row'
  },
  containersec:{
    height:470,
  },
  card:{
    textAlign:'base-line',
    alignItems:'center',
    width: 190,
    height: 180,
    borderRadius: 5,
    backgroundColor: '#1b2a41',
  },
    RecCard:{
      flex:1,
      flexDirection:'row-reverse',
      width: 380,
      height: 150,
      margin:10,
      borderRadius: 10,
      elevation:30,
      backgroundColor: '#1b2a41'
    },
  RecCardInfo:{
    top:10,
    left:10,
    height:100,
    width:230,
    textAlign:'left',
  },
    RecCardSmall:{
      alignItems:'center',
      width: 120,
      height: 170,
      margin: 2,
      marginTop:5,
      elevation:30,
      borderRadius: 5,
      backgroundColor: '#1b2a41',
    },
  prodImg:{
    top:20,
    height:100,
    width:200,
    resizeMode:'contain'
  },
  prodImgSmall:{
    height:140,
    width:230,
    resizeMode:'contain'
  },
  prodImgSmallRec:{
    top:-15,
    left:-20,
    height:150,
    width:230,
    resizeMode:'stretch'
  },
  pressBtn:{
    marginTop:60,
    marginLeft:8,
    borderRadius:8,
    backgroundColor:'#03045E',
    width:80,
    height:80
  },
  RecCardTitle:{
    fontFamily:'Inter',
    color:'#03045E',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left',
  },
  RecCardPara:{
    fontFamily:'Roboto-Bold',
    fontSize:15,
    textAlign:'left',
    color:'#eee0cb',
  },
  cardText:{
    fontFamily:'Roboto',
    color:'#eee0cb',
  },
  pressTxt:{
    fontFamily:'Roboto-thin',
    fontSize:20,
    marginTop:30,
    textAlign:'center'
  },
  })