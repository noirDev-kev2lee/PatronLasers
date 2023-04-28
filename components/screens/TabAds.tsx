import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
} from 'react-native';

import React from 'react';
import Product from './Product';
const productList = [
  {
    id: 0,
    name: 'Box',
    category: 'Hair removal devices',
    img: require('../assets/product1.png'),
    desc: 'The laser beam is actually the result of the emission of photons in one direction, in a narrow beam.All the emitted photons transmit on the same wave and have only one wavelength. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates.There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. The laser beam is actually the result of the emission of photons in one direction, in a narrow beam.All the emitted photons transmit on the same wave and have only one wavelength. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates.There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. ',
  },
  {
    id: 1,
    name: 'Lisa',
    category: 'Hair removal devices',
    img: require('../assets/product2.png'),
    desc: 'The laser beam is actually the result of the emission of photons in one direction, in a narrow beam.All the emitted photons transmit on the same wave and have only one wavelength. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates.There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. The laser beam is actually the result of the emission of photons in one direction, in a narrow beam.All the emitted photons transmit on the same wave and have only one wavelength. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates.There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. There are different and diverse types of laser, where each type of laser differs in the wavelength at which it operates. ',
  },
  {
    id: 2,
    name: 'product three',
    img: require('../assets/product3.png'),
    desc: 'This is product three',
  },
  {
    id: 3,
    name: 'product four',
    img: require('../assets/product4.png'),
    desc: 'This is product four',
  },
];

const ProductHome = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.scrollHeader}>New Arrivals</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
          {productList.map (product => (
            <Pressable key={product.id} onPress={() => navigation.navigate('Product Info',{
              desc:product.desc,
              name:product.name,
              image:product.img,
              category:product.category
            })
          }>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>{product.name}</Text>
              <Text style={styles.RecCardPara}>{product.desc}</Text>
            </View>
            <Image style={styles.prodImgSmallRec}source={product.img}/>
          </View>
          </Pressable>
          ))}
      </ScrollView>
      <View>
        <Text style={styles.scrollHeader}>Must See Products</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containersec}>
        <View>
          <View style={styles.scrollsec}>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product1.png')}
              />
              <Text style={styles.cardText}>Product One</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product2.png')}
              />
              <Text style={styles.cardText}>Product Two</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product4.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
          </View>
          <View style={styles.scrollsec}>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product2.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product4.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product1.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
          </View>
          <View style={styles.scrollsec}>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product1.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product1.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
            <View style={[styles.RecCardSmall]}>
              <Image
                style={styles.prodImgSmall}
                source={require('../assets/product1.png')}
              />
              <Text style={styles.cardText}>Product Three</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductHome;

const styles = StyleSheet.create({
  scroll: {
    height:180
  },
  scrollsec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scrollHeader: {
    fontFamily: 'Inter',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'left',
    marginTop: 20,
    color: '#222',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containersec: {
    marginTop:10,
    height: 430,
    marginBottom: 450,
  },
  card: {
    textAlign: 'base-line',
    alignItems: 'center',
    margin: 10,
    width: 150,
    height: 180,
    borderRadius: 5,
    elevation: 10,
    backgroundColor: '#fff',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCard: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 380,
    height: 150,
    margin: 10,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCardInfo: {
    top: 10,
    left: 10,
    height: 100,
    width: 230,
    textAlign: 'left',
    color: '#222',
  },
  RecCardSmall: {
    alignItems: 'center',
    width: 120,
    height: 150,
    margin: 2,
    marginTop: 5,
    elevation: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  prodImg: {
    height: 150,
    width: 250,
    resizeMode: 'contain',
  },
  prodImgSmall: {
    margin: -5,
    height: 140,
    width: 240,
    resizeMode: 'contain',
  },
  prodImgSmallRec: {
    top: -15,
    left: -20,
    height: 150,
    width: 230,
    resizeMode: 'contain',
  },
  pressBtn: {
    fontFamily: 'Inter-Regular',
    alignContent: 'center',
    marginTop: 60,
    marginLeft: 8,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  RecCardTitle: {
    fontFamily: 'Inter',
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardPara: {
    fontFamily: 'Inter',
    fontSize: 15,
    textAlign: 'left',
    color: '#222',
  },
  cardText: {
    fontFamily: 'Roboto',
    color: '#222',
  },
  pressTxt: {
    fontFamily: 'Roboto-thin',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
});
