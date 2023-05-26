import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


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
    desc: 'The TITI device works with ultra-short technology in order to damage and exert great pressure on the melanin pigment, which shatters into small pieces. The small particles are absorbed by the skin and disperse the various pigments that make up the tattoo. This is an effective, fast, non-invasive treatment that avoids the need for a complex surgical procedure. Treatment for removing tattoos using the TITI device is intended for treating most areas of the body such as: face, hands, chest, legs and more.  ',
  },
  {
    id: 2,
    name: 'product three',
    img: require('../assets/product3.png'),
    desc: 'The TITI device works with ultra-short technology in order to damage and exert great pressure on the melanin pigment, which shatters into small pieces. The small particles are absorbed by the skin and disperse the various pigments that make up the tattoo. This is an effective, fast, non-invasive treatment that avoids the need for a complex surgical procedure. Treatment for removing tattoos using the TITI device is intended for treating most areas of the body such as: face, hands, chest, legs and more. ',
  },
  {
    id: 3,
    name: 'product four',
    img: require('../assets/product4.png'),
    desc: 'This is product four',
  },
];
const TabGuide = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <View>
        <Text style={styles.scrollHeader}>My Products Guides</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.container}>
          {productList.map(product => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.navigate('Guide Info', {
                  desc: product.desc,
                  name: product.name,
                  category: product.category,
                })
              }>
              <View style={[styles.RecCard]}>
                <View style={styles.RecCardInfo}>
                  <Text style={styles.RecCardTitle}>{product.name}</Text>
                  <Text style={styles.RecCardPara}>{product.desc}</Text>
                </View>
                <Image style={styles.prodImgSmallRec} source={product.img} />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View>
        <Text style={styles.scrollHeader}>More Product Guides</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containersec}>
        <View>
          {productList.map(product => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.navigate('Guide Info', {
                  desc: product.desc,
                  name: product.name,
                  image: product.img,
                  category: product.category,
                })
              }>
              <View style={styles.scrollsec}>
                <View style={[styles.RecCardSmall]}>
                  <Image style={styles.prodImgSmall} source={product.img} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
                <View style={[styles.RecCardSmall]}>
                  <Image style={styles.prodImgSmall} source={product.img} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
                <View style={[styles.RecCardSmall]}>
                  <Image style={styles.prodImgSmall} source={product.img} />
                  <Text style={styles.cardText}>{product.name}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TabGuide;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {},
  scrollHeader: {
    fontFamily: 'Inter',
    fontSize: 20,
    textTransform: 'uppercase',
    textAlign: 'left',
    marginBottom: 10,
    color: '#222',
  },
  container: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
  },
  scrollsec: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  containersec: {
    margin: 5,
    height:height * 0.47,
    flexDirection: 'column',
  },
  card: {
    textAlign: 'base-line',
    alignItems: 'center',
    width: 190,
    height: 180,
    borderRadius: 5,
    backgroundColor: '#fff',
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
  },
  RecCardSmall: {
    alignItems: 'center',
    width: wp('28%'),
    height: hp('20%'),
    marginHorizontal: 8,
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
    top: 20,
    height: 100,
    width: 200,
    resizeMode: 'contain',
  },
  prodImgSmall: {
    margin: -5,
    height:hp('18%'),
    width: 230,
    resizeMode: 'contain',
  },
  prodImgSmallRec: {
    right: 10,
    height: 150,
    width: 200,
    resizeMode: 'contain',
  },
  pressBtn: {
    marginTop: 60,
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: '#03045E',
    width: 80,
    height: 80,
  },
  RecCardTitle: {
    fontFamily: 'Inter',
    color: '#777',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardPara: {
    fontFamily: 'Roboto-Bold',
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
