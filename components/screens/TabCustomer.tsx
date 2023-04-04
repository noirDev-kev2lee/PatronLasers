import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const TabCustomer = () => {
  return (
    <View>
    
      <View style={styles.createSec}>
        <Pressable onPress={() => Alert.alert('Appointment made')} style={styles.createPress}><Text style={styles.textPress}>Appointment</Text>
        <Icon name={'add-circle-outline'} color={'#fff'} size={70}/>
        </Pressable>
        <Pressable onPress={() => Alert.alert('Customer Added')} style={styles.createPress}><Text style={styles.textPress}>Customer</Text>
        <Icon name={'add-circle-outline'} color={'#fff'} size={70}/>
        </Pressable>
      </View>
      <View style={styles.list}>
        <Text style={styles.listTitle}>My Customers</Text>
        <ScrollView style={styles.listScroll}>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Jane doe</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer1.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Alister mclain</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Sarah john</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer3.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Doris hale</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer3.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>clare monclair</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Marie Matip</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        </ScrollView>
      </View>                              
    </View>
  )
}

export default TabCustomer

const styles = StyleSheet.create({
  text:{
    top:10,
    paddingBottom:10,
    paddingLeft:15,
    fontFamily:'Roboto-Regular',
    fontSize:30,
    color:'#000'
  },
  textPress:{
    marginBottom:0,
    fontFamily:'Roboto-Thin',
    fontSize:20,
    color:'#fff'
  },
  createSec:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'f6f6f6',
  },
  createPress:{
    top:20,
    paddingTop:40,
    marginHorizontal:10,
    marginBottom: 10,
    borderRadius:40,
    alignItems:'center',
    elevation: 50,
    height:150,
    width:180,
    backgroundColor:'#03045e'
  },
  list:{
    top:200,
  },
  listTitle:{
    fontFamily:'Inter',
    fontSize:40,
    textAlign:'center',
    color:'#000'
  },
  listScroll:{
    height:453,
    marginBottom:800,
    flexDirection:'column',
  },
  RecCard:{
    flex:1,
    flexDirection:'row-reverse',
    alignItems:'center',
    width: 380,
    height: 120,
    marginTop: 5,
    marginRight: 10,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    marginBottom:10
  },
  RecCardInfo:{
    top:10,
    left:10,
    height:100,
    width:230,
    textAlign:'left',
    color:'#eee0cb'
  },
  RecCardTitle:{
    fontFamily:'Inter',
    color:'#000',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left',
  },
  RecCardPara:{
    fontFamily:'Roboto-Bold',
    fontSize:15,
    textAlign:'left',
    color:'#000',
  },
  customerImg:{
    left:40,
    alignItems:'center',
  },
  prodImgSmallRec:{    
    height:100,
    width:100,
    borderRadius:100,
    resizeMode:'contain'
  }
})