import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const ProductHome = ({navigation}) => {
  const productList = [
    {
      id: 0,
      name: 'product one',
      img: require('../assets/product1.png'),
      desc: 'This is product one',
    },
    {
      id: 1,
      name: 'product two',
      img: require('../assets/product2.png'),
      desc: 'This is product two',
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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcome}>
        <Icon2 name="person-circle" size={60} color="#131035" />
        <Text style={styles.welcomeNote}>Hello, username</Text>
      </View>
      <View>
        <Text style={styles.scrollHeader}>My Products</Text>
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
                navigation.navigate('Product Info', {desc: product.desc})
              }>
              <View style={[styles.card]}>
                <Image style={styles.prodImg} source={product.img} />
                <Text style={styles.cardText}>{product.name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={styles.pressBtn}
          onPress={() => navigation.navigate('Add Product')}>
          <Icon name="pluscircle" size={60} color="#131035" />
        </Pressable>
      </ScrollView>
      <View>
        <Text style={styles.scrollHeader}>More From Patron</Text>
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
  scroll: {},
  mainContainer: {
    paddingHorizontal: 0,
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeNote: {
    fontSize: 15,
    color: 'black',
  },
  scrollsec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  scrollHeader: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'left',
    marginLeft: 20,
    paddingTop: 20,
    color: '#222',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containersec: {
    height: 420,
    minHeight: 320,
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
    color: 'black',
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
    right: 30,
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
    fontFamily: 'Inter',
    color: '#222',
  },
  pressTxt: {
    fontFamily: 'Inter',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  moreContainer: {
    marginTop: 20,
  },
});
