import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HTML from 'react-native-render-html';
import api from '../utils/api';

const TabGuide = ({navigation, route}: {navigation: any; route: any}) => {
  const data = route.params as {
    username: string;
  };
  const {username} = data;
  const [products, setProducts] = useState<any[]>([]);
  const [purchased, setPurchased] = useState<any[]>([]);
  useEffect(() => {
    fetchProducts();
    fetchPurchased();
  }, []);
  const fetchPurchased = async () => {
    try {
      api.get('purchases/').then(res => setPurchased(res.data.rows));
    } catch (error) {
      return error;
    }
  };
  const fetchProducts = async () => {
    try {
      await api.get('products/').then(res => setProducts(res.data.rows));
    } catch (error) {
      return error;
    }
  };

  const filteredSN = purchased
    .filter(y => y.clinic_name === username)
    .map(purchase => purchase.serial_number);
  const myProducts = products.filter(obj =>
    filteredSN.includes(obj.serial_number),
  );
  // endpoint for image
  const myImg = 'http://15.237.138.133:7000/';
  const windowWidth = useWindowDimensions().width;
  const htmlRenderStyles = StyleSheet.create({
    baseText: {
      color: 'black',
    },
  });
  return (
    <View>
      <View style={{paddingHorizontal: 12, paddingTop: 10}}>
        <Text style={styles.scrollHeader}>My Products Guides</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.container}>
          {myProducts.map(product => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.navigate('Guide Info', {
                  desc: product.descriptions,
                  name: product.product_name,
                  category: product.category,
                })
              }>
              <View style={[styles.RecCard]}>
                <View style={styles.RecCardInfo}>
                  <Text style={styles.RecCardTitle}>
                    {product?.product_name}
                  </Text>
                  <HTML
                    source={{html: product?.descriptions}}
                    contentWidth={windowWidth}
                    baseStyle={htmlRenderStyles.baseText}
                  />
                  <Text style={styles.RecCardPara}>
                    {product?.descriptions}
                  </Text>
                </View>
                <Image
                  style={styles.prodImgSmallRec}
                  source={{uri: myImg + product?.img_url}}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 12, paddingTop: 10}}>
        <Text style={styles.scrollHeader}>More Product Guides</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containersec}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {products.map(product => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.navigate('Guide Info', {
                  desc: product.descriptions,
                  name: product.product_name,
                })
              }>
              <View style={styles.scrollsec}>
                <View style={[styles.RecCardSmall]}>
                  <Image
                    style={styles.prodImgSmall}
                    source={{uri: myImg + product?.img_url}}
                  />
                  <Text style={styles.cardText}>{product?.product_name}</Text>
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
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {},
  scrollHeader: {
    fontSize: 18,
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
    height: height * 0.47,
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
    height: hp('18%'),
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
    color: '#777',
    fontSize: 18,
    fontWeight: '500',
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
