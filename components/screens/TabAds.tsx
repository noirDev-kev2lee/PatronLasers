import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions 
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HTML from 'react-native-render-html';
import api from '../utils/api'


const ProductHome = ({navigation}: {navigation: any}) => {
  const windowWidth = useWindowDimensions().width;
  const [products, setProducts] = useState<any[]>([])
  const myImg = 'http://35.180.24.145:7000/';
  // fetch products
  useEffect(()=>{
    const fetchProducts = async () =>{
      try{
       await api.get('products/'). then((res)=> setProducts(res.data.rows))
      }catch(error){
        return error
      }

    }
    fetchProducts();
  },[])
  const htmlRenderStyles = StyleSheet.create({
    baseText: {
      color: 'black', 
    },
  });
  function limitWords(str: string, limit: number) {
    const words = str.split(' ');
    const limitedWords = words.slice(0, limit);
    const limitedString = limitedWords.join(' ');
    return limitedString;
  }
  return (
    <View >
      <View style={{paddingLeft: 16, paddingTop: 16}}>
        <Text style={styles.scrollHeader}>New Arrivals</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.container}>
        {products.slice(0,5).map(product => (
          <Pressable
            key={product.id}
            onPress={() =>
              navigation.navigate('Product Info', {
                desc: product?.descriptions,
                  name: product?.product_name,
                  category: product?.category,
              })
            }>
            <View style={[styles.RecCard]}>
              <View style={styles.RecCardInfo}>
                <Text style={styles.RecCardTitle}>{product.product_name}</Text>
                <View>
                <HTML source={{ html: limitWords(product?.descriptions,35) }} contentWidth={windowWidth} baseStyle={htmlRenderStyles.baseText} />
              </View>
              </View>
              <Image style={styles.prodImgSmallRec} source={{uri: myImg + product?.img_url}} />
            </View>
          </Pressable>
        ))}
        </View>
      </ScrollView>
      <View style={{paddingLeft: 16, paddingVertical:16}}>
        <Text style={styles.scrollHeader}>Must See Products</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containersec}>
        <View style={styles.productsContainer}>
        {products.map(product => (
            <Pressable
              key={product.id}
              style={styles.productsView}
              onPress={() =>
                navigation.navigate('Product Info', {
                  desc: product?.descriptions,
                  name: product?.product_name,
                  category: product?.category,
                })
              }
              >
              <View>
                <View style={[styles.RecCardSmall]}>
                  <Image style={styles.prodImgSmall} source={{uri: myImg + product?.img_url}} />
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

export default ProductHome;
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {
    
  },
  scrollHeader: {
    fontFamily: 'Inter',
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
  
  containersec: {
    margin: 5,
    height:height * 0.47,
    flexDirection: 'column',
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
    height: 150,
    width: 250,
    resizeMode: 'contain',
  },
  prodImgSmall: {
    margin: -5,
    height:hp('18%'),
    width: 230,
    resizeMode: 'contain',
  },
  prodImgSmallRec: {
   
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
    fontSize: 18,
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
   productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productsView: {
    flexBasis: '33.33%', 
    marginBottom: 10, 
  },
});
