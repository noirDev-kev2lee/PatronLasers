import { StyleSheet,ScrollView, Pressable, Text, View, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const ProductHome = ({navigation}) => {
  return (
    <View>
      <View><Text style={styles.scrollHeader}>My Products</Text></View>
      <ScrollView horizontal style={styles.scroll}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('Product Info')}>
        <View style={[styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product One</Text>
          </View>
        </Pressable>
        <View style={[styles.card]}>                                             
          <Image style={styles.prodImg} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.card,]}>
          <Image style={styles.prodImg} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/1-7.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
      </View>
      <Pressable style={styles.pressBtn} onPress={() => navigation.navigate('Products')}>
          <Icon name='add-circle-outline' size={80} color='#eee0cb'/>
          </Pressable>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>Recommended</Text></View>
      <ScrollView horizontal style={styles.scroll}>
      <View style={styles.container}>
      <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product One</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product1.png')}/>
        </View>
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
      <View><Text style={styles.scrollHeader}>More From Patron</Text></View>
      <ScrollView style={styles.containersec}>
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
        </View>
        </ScrollView>
        </View>
  )
}

export default ProductHome

const styles = StyleSheet.create({
    scroll:{
    },
    scrollsec:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    scrollHeader:{
      fontFamily:'Roboto',
      fontSize:20,                                                                                      
      textTransform:'uppercase',
      textAlign:'left',
      margin:5,
      color:'#eee0cb',
    },
    container:{
      flex:1,
      flexDirection:'row'
    },
    containersec:{
      height:300,
      marginBottom:450
    },
    card:{
      textAlign:'base-line',
      alignItems:'center',
      marginRight:10,
      width: 150,
      height: 180,
      borderRadius: 5,
      backgroundColor: '#1b2a41',
    },
    RecCard:{
      flex:1,
      flexDirection:'row-reverse',
      width: 380,
      height: 150,
      marginRight: 10,
      borderRadius: 10,
      backgroundColor: '#1b2a41'
    },
    RecCardInfo:{
      top:10,
      left:10,
      height:100,
      width:230,
      textAlign:'left',
      color:'black'
    },
    RecCardSmall:{
      alignItems:'center',
      width: 120,
      height: 150,
      margin: 2,
      borderRadius: 5,
      backgroundColor: '#1b2a41',
    },
    prodImg:{
      height:150,
      width:250,
      resizeMode:'stretch'
    },
    prodImgSmall:{
      margin:-5,
      height:140,
      width:240,
      resizeMode:'stretch'
    },
    prodImgSmallRec:{
      top:-15,
      left:-20,
      height:150,
      width:230,
      resizeMode:'stretch'
    },
    pressBtn:{
      fontFamily:'Inter-Regular',
      alignContent:'center',
      marginTop:60,
      marginLeft:8,
      borderRadius:50,
      width:80,
      height:80
    },
    RecCardTitle:{
      fontFamily:'Inter',
      color:'#eee0cb',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'left',
    },
    RecCardPara:{
      fontFamily:'Inter',
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