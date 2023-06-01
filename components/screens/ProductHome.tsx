import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Text,
  View,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import AddProduct from './AddProduct';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import api from '../utils/api'

const ProductHome = ({navigation, route}: {navigation: any; route: any}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [purchased, setPurchased] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  const data = route.params as {username: string; email: string; lastname: string; role: string; id:string;};
  const {username, email, lastname,role,id} = data;
 
  Platform.OS === 'ios' ? 'ios-md-close-outline' : 'md-close-outline';

  // fetch purchased
  useEffect(()=>{
    const fetchPurchased = async () =>{
      try{
        api.get('purchases/').then((res)=> setPurchased(res.data.rows))
      }catch(error){
        return error
      }
    }
    fetchPurchased();
  },[])
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

  // filter serial number
  const filteredSN= purchased.filter(y => y.clinic_name === username) .map(purchase => purchase.serial_number);
  const myProducts = products.filter((obj) => filteredSN.includes(obj.serial_number));
  // endpoint for image
  const myImg = 'http://35.180.24.145:7000/';
 
  return (
    <View style={styles.mainContainer}>
      {/* Modal for adding new product */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:'100%',flexDirection: 'row',justifyContent: 'flex-end',paddingTop: 20, paddingRight: 20}}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="close" size={30} color={'#222'} />
            </Pressable>
            </View>
            <AddProduct clinicName={username} />
          </View>
        </View>
      </Modal>
      {/* Modal for drawer */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={drawerModalVisible}
        onRequestClose={() => {
          setdrawerModalVisible(!drawerModalVisible);
        }}>
        <View style={styles.drawerModal}>
          <View>
            <View style={{width: '100%', flexDirection:'row', justifyContent: 'flex-end', paddingBottom: 15}}>
              <Pressable
                onPress={() => setdrawerModalVisible(!drawerModalVisible)}>
                <Icon name="close" size={30} color={'#DFDFDF'} />
              </Pressable>
            </View>
            <View style={styles.drawerInfo}>
              <Icon2 name="user-circle-o" size={58} color="#DFDFDF" />
             <View>
             <Text style={styles.drawerName}>{username}</Text>
             <Text style={styles.drawerEmail}>{email}</Text>
             </View>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View>
              {/* <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('Finacial Area'),
                ]}>
                <View style={styles.drawerList}>
                  <Icon2 name="money" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>financial</Text>
                  </View>
                </View>
              </Pressable> */}
              <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('About Us'),
                ]}>
                <View style={styles.drawerList}>
                  <Icon name="profile" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>About</Text>
                  </View>
                </View>
              </Pressable>
              {/* change password */}
              <Pressable onPress={() => navigation.navigate('change_password',{username:username,email:email, lastname:lastname, role:role, id:id})}>
                <View style={styles.drawerList}>
                  <Icon name="lock1" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Change Password</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <View style={styles.drawerList}>
                  <Icon name="logout" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Sign out </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {/* welcome note and open drawer */}
      <Pressable onPress={() => setdrawerModalVisible(true)}>
        <View style={styles.welcome}>
          <Icon2 name="user-circle-o" size={42} color="#131035" />
          <Text style={styles.welcomeNote}>Hello, {username}</Text>
        </View>
      </Pressable>
      {/*My Products tiles */}
      <View>
        <Text style={styles.scrollHeader}>My Products</Text>
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
                navigation.navigate('Product Info', {
                  desc: product?.descriptions,
                  name: product?.product_name,
                  category: product?.category,
                })
              }>
              <View style={[styles.card]}>
                <Image style={styles.prodImg} source={{uri: myImg + product?.img_url}} />
                <Text style={styles.cardText}>{product?.product_name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={{flexDirection: 'column',justifyContent: 'center',}}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.pressBtn}>
          <Icon name="pluscircle" size={60} color="#4BB543" />
        </Pressable>
        </View>
      </ScrollView>
      <View>
        <Text style={styles.scrollHeader}>More From Patron</Text>
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
              <View style={styles.scrollsec}>
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
  scroll: {},
  mainContainer: {
    paddingHorizontal: 0,
    backgroundColor: '#F8FAFB',
  },
  welcome: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  welcomeNote: {
    fontFamily: 'Inter',
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  scrollsec: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  scrollHeader: {
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
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
    margin: 5,
    height:height * 0.38,
    flexDirection: 'column',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productsView: {
    flexBasis: '33.33%', 
    marginBottom: 10, 
  },
  card: {
    textAlign: 'base-line',
    alignItems: 'center',
    margin: 10,
    width: wp('42%'),
    height: hp('25%'),
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
    height: hp('22%'),
    width: wp('40%'),
    resizeMode: 'contain',
  },
  prodImgSmall: {
    margin: -5,
    height:hp('18%'),
    width: 240,
    resizeMode: 'contain',
  },
  prodImgSmallRec: {
    top: -15,
    right: 30,
    height: 10,
    width: 230,
    resizeMode: 'contain',
  },
  pressBtn: {
    fontFamily: 'Roboto',
    marginLeft: 8,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  RecCardTitle: {
    fontFamily: 'Roboto',
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardPara: {
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'left',
    color: '#222',
  },
  cardText: {
    fontFamily: 'Roboto',
    color: '#222',
  },
  pressTxt: {
    fontFamily: 'Roboto',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    top: 60,
  },
  modalView: {
    height: 400,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
   
   
    elevation: 2,
  },
  drawerModal: {
    top: 41,
    left: 0,
    height: '100%',
    width: '85%',
    paddingHorizontal: 25,
    paddingVertical: 25,
    elevation: 100,
    backgroundColor: '#131035',
  },
  drawerList: {
    flexDirection: 'row',
    paddingBottom: 25,
  },
  drawerTextCon: {
    paddingLeft: 20,
  },
  
  drawerTxt: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#DADADA',
    textTransform: 'capitalize',
  },
  drawerInfo: {
    flexDirection: 'column',
  },
  drawerName: {
    fontFamily: 'Roboto',
    marginTop: 10,
    color: '#DFDFDF',
    fontSize: 20,
  },
  drawerEmail: {
    fontFamily: 'Roboto',
    marginTop: 10,
    color: '#808083',
    fontSize: 18,
  },
  lineContainer: {
    paddingVertical: 25,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DADADA',
  },
});
