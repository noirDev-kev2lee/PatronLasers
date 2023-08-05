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
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import AddProduct from './AddProduct';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import api from '../utils/api';

const ProductHome = ({navigation, route}: {navigation: any; route: any}) => {
  const [products, setProducts] = useState<any[]>([]);
  const [purchased, setPurchased] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [drawerModalVisible, setdrawerModalVisible] = useState(false);
  const data = route.params as {
    username: string;
    email: string;
    lastname: string;
    role: string;
    id: string;
  };
  const {username, email, lastname, role, id} = data;

  Platform.OS === 'ios' ? 'ios-md-close-outline' : 'md-close-outline';

  // fetch purchased
  useEffect(() => {
    const fetchPurchased = async () => {
      try {
        api.get('purchases/').then(res => setPurchased(res.data.rows));
      } catch (error) {
        return error;
      }
    };
    fetchPurchased();
  }, []);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await api.get('products/').then(res => setProducts(res.data.rows));
      } catch (error) {
        return error;
      }
    };
    fetchProducts();
  }, []);
  //Customer Tab Data
  const [patientData, setPatientData] = useState<any[]>([]);
  const [appointmentData, setAppointmentData] = useState<any[]>([]);
  //Patient
  useEffect(() => {
    api.get('patients/').then(res => setPatientData(res.data.rows));
  }, [patientData]);
  //Appointments
  useEffect(() => {
    api.get('appointments/').then(res => setAppointmentData(res.data.rows));
  }, [appointmentData]);
  const patientList = patientData.filter(y => y.clinic_name === username);
  const appointmentList = appointmentData.filter(
    x => x.clinic_name === username,
  );

  // filter serial number
  const filteredSN = purchased
    .filter(y => y.clinic_name === username)
    .map(purchase => purchase.serial_number);
  const myProducts = products.filter(obj =>
    filteredSN.includes(obj.serial_number),
  );
  // endpoint for image
  const myImg = 'http://15.237.138.133:7000/';

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
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingTop: 20,
                paddingRight: 20,
              }}>
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
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingBottom: 15,
              }}>
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
              {
                <Pressable
                  onPress={() => [
                    setdrawerModalVisible(!drawerModalVisible),
                    navigation.navigate('Finacial Area', {username: username}),
                  ]}>
                  <View style={styles.drawerList}>
                    <Icon2 name="money" size={30} color={'#fff'} />
                    <View style={styles.drawerTextCon}>
                      <Text style={styles.drawerTxt}>financial</Text>
                    </View>
                  </View>
                </Pressable>
              }
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
              <Pressable
                onPress={() =>
                  navigation.navigate('change_password', {
                    username: username,
                    email: email,
                    lastname: lastname,
                    role: role,
                    id: id,
                  })
                }>
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
                <Image
                  style={styles.prodImg}
                  source={{uri: myImg + product?.img_url}}
                />
                <Text style={styles.cardText}>{product?.product_name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.pressBtn}>
            <Icon name="pluscircle" size={60} color="#4BB543" />
          </Pressable>
        </View>
      </ScrollView>
      <ScrollView horizontal pagingEnabled={true}>
        {/* appointments list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>Appointments</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {appointmentList.length === 0 ? (
              <View>
                <Text style={{color: 'red', paddingLeft: 10}}>
                  No available appointments
                </Text>
              </View>
            ) : (
              <View>
                {appointmentList.map(y => (
                  <View key={y.id}>
                    <View style={[styles.RecCard]}>
                      <View style={styles.RecCardInfo}>
                        <View style={styles.nameContainer}>
                          <Text style={styles.RecCardTitle}>
                            {y.patient_id}
                          </Text>
                          {y.job_status !== 'done' ? <View /> : ''}
                        </View>
                        <Text style={styles.subTitle}>{y.service_type}</Text>
                        <View style={styles.timeContainer}>
                          <View
                            style={[styles.dateTimeCont, {marginRight: 20}]}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="calendar"
                              size={20}
                              color={'green'}
                            />
                            <Text style={styles.startDateText}>
                              {y.start_date}
                            </Text>
                          </View>
                          <View style={styles.dateTimeCont}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="clock-o"
                              size={25}
                              color={'green'}
                            />
                            <Text style={styles.startDateText}>
                              {y.start_time}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.timeContainer}>
                          <View
                            style={[styles.dateTimeCont, {marginRight: 20}]}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="calendar"
                              size={20}
                              color={'#B30000'}
                            />
                            <Text style={styles.endDateText}>{y.end_date}</Text>
                          </View>
                          <View style={styles.dateTimeCont}>
                            <Icon2
                              style={{marginRight: 5}}
                              name="clock-o"
                              size={25}
                              color={'#B30000'}
                            />
                            <Text style={styles.endDateText}>{y.end_time}</Text>
                          </View>
                        </View>
                        <Text style={styles.RecCardPara}>{y.job_status}</Text>
                        <Text style={styles.endDateText2}>
                          Session: {y.session_number}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.line} />
                    </View>
                    {/* Done and cancel modal */}
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        {/* customers list */}
        <View style={styles.list}>
          <View style={styles.customerHeader}>
            <Text style={styles.listTitle}>My Customers</Text>
          </View>
          <ScrollView style={styles.listScroll}>
            {patientList.length === 0 ? (
              <View>
                <Text style={{color: 'red', paddingLeft: 20}}>
                  No available customers
                </Text>
              </View>
            ) : (
              <View>
                {patientList.map((customer: any) => (
                  <View key={customer.id}>
                    <View style={[styles.customerCard]}>
                      <View style={styles.customerImg}>
                        <Text style={styles.profileLetter}>
                          {customer.first_name?.charAt(0)}
                        </Text>
                      </View>
                      <View style={styles.RecCardInfo}>
                        <View style={styles.infoGroup}>
                          <Text style={styles.idTitle}>
                            {customer.patient_id}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <Text style={styles.RecCardTitle}>
                            {customer.first_name} {customer.last_name}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <Text style={styles.RecCardPara}>
                            Age:{customer.age}
                          </Text>
                          <Text
                            style={[
                              styles.RecCardPara,
                              {marginLeft: 15, textTransform: 'capitalize'},
                            ]}>
                            Gender:{customer.gender}
                          </Text>
                        </View>
                        <View style={styles.infoGroup}>
                          <View>
                            <Text style={styles.RecCardPara}>
                              +{customer.phone}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={[styles.RecCardPara, {marginLeft: 15}]}>
                              {customer.email}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.lineContainer}>
                      <View style={styles.line} />
                    </View>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductHome;
const {width, height} = Dimensions.get('window');
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
    height: height * 0.38,
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
    flexDirection: 'row',
    width: 380,
    padding: 10,
    marginLeft: 15,
    height: 190,
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
    marginLeft: 10,
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
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
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
  //These styles are for the customer section
  list: {
    width: width * 1,
  },
  listTitle: {
    fontFamily: 'Roboto',
    fontSize: 23,
    marginBottom: 5,                                                                                                                              
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#131035',
  },
  listScroll: {
    height: height * 0.5,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  customerCard: {
    flexDirection: 'row',
    height: 140,
    backgroundColor: '#F8FAFB',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  customerImg: {
    backgroundColor: '#131035',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,   
    height: 50,
  },
  customerHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  profileLetter: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: 25,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  startDateText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'green',
  },
  endDateText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#B30000',
  },
  endDateText2: {
    textAlign: 'right',
    bottom: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'blue',
  },
  idTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#36454F',
  },
  infoGroup: {
    flexDirection: 'row',
  },
  dateTimeCont: {
    flexDirection: 'row',
    paddingVertical: 3,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  doneBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 19,
    color: '#36454F',
  },
});
