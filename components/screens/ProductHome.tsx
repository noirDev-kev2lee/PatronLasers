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
// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

// import {Gesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Feather';
import AddProduct, {AboutUs} from './AddProduct';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import {DrawerActions} from '@react-navigation/native';
// import {Alert} from 'react-native';

const ProductHome = ({navigation, route}: {navigation: any; route: any}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  const data = route.params as {username: string};
  const {username} = data;
  const iconName = Platform.OS === 'ios' ? 'ios-md-close-outline' : 'md-close-outline';

  // const nav = useNavigation();
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
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icon2 name="ios-close-outline" size={30} color={'#222'} />
            </Pressable>
            <AddProduct />
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
            <View>
              <Pressable
                style={styles.drawerButton}
                onPress={() => setdrawerModalVisible(!drawerModalVisible)}>
                <Icon name="close" size={30} color={'#DADADA'} />
              </Pressable>
            </View>
            <View style={styles.drawerInfo}>
              <Icon2 name="user" size={72} color="#DADADA" />
              <Text style={styles.drawerName}>{username}</Text>
            </View>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View>
              <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('Finacial Area'),
                ]}>
                <View style={styles.drawerList}>
                  <Icon3 name="money" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Finacial</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => [
                  setdrawerModalVisible(!drawerModalVisible),
                  navigation.navigate('About Us'),
                ]}>
                <View style={styles.drawerList}>
                  <Icon2 name="book" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>About</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <View style={styles.drawerList}>
                  <Icon4 name="log-out" size={30} color={'#fff'} />
                  <View style={styles.drawerTextCon}>
                    <Text style={styles.drawerTxt}>Sign out </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setdrawerModalVisible(true)}>
        <View style={styles.welcome}>
          <Icon2 name="user" size={52} color="#131035" />
          <Text style={styles.welcomeNote}>Hello, {username}</Text>
        </View>
      </Pressable>
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
                navigation.navigate('Product Info', {
                  desc: product.desc,
                  name: product.name,
                  category: product.category,
                })
              }>
              <View style={[styles.card]}>
                <Image style={styles.prodImg} source={product.img} />
                <Text style={styles.cardText}>{product.name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.pressBtn}>
          <Icon name="pluscircle" size={60} color="#888" />
        </Pressable>
      </ScrollView>
      <View>
        <Text style={styles.scrollHeader}>More From Patron</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containersec}>
        <View>
          {productList.map(product => (
            <Pressable
              key={product.id}
              onPress={() =>
                navigation.navigate('Product Info', {
                  desc: product.desc,
                  name: product.name,
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

export default ProductHome;

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
    fontSize: 15,
    color: 'black',
  },
  scrollsec: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  scrollHeader: {
    fontFamily: 'Inter',
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
    height: hp('35%'),
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
    height: 150,
    width: 250,
    resizeMode: 'contain',
  },
  prodImgSmall: {
    margin: -5,
    height: hp('18%'),
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
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    top: 10,
    left: 150,
    elevation: 2,
  },
  drawerModal: {
    top: 41,
    left: 0,
    height: '100%',
    width: 270,
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
  drawerButton: {
    top: 5,
    left: 180,
  },
  drawerTxt: {
    fontSize: 20,
    color: '#DADADA',
  },
  drawerInfo: {
    flexDirection: 'column',
  },
  drawerName: {
    color: '#DADADA',
    fontSize: 25,
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
