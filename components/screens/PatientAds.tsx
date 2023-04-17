import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'

export default function PatientAds() {
  return (
    <View>
      <ScrollView pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.container}>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Tandale Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                hic quod vel cumque dolore recusandae quam maiores, doloremque
                enim inventore error ducimus laborum consequuntur. Pariatur
                recusandae aliquid vel reiciendis sed!
              </Text>
              <Text style={styles.RecCardTime}>8:00am-4:00pm</Text>
            </View>
          </View>
          <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Oyseterbay Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                hic quod vel cumque dolore recusandae quam maiores, doloremque
                enim inventore error ducimus laborum consequuntur. Pariatur
                recusandae aliquid vel reiciendis sed!
              </Text>
              <Text style={styles.RecCardTime}>10:00am-6:00pm</Text>
            </View>
          </View>
          <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Masaki Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                hic quod vel cumque dolore recusandae quam maiores, doloremque
                enim inventore error ducimus laborum consequuntur. Pariatur
                recusandae aliquid vel reiciendis sed!
              </Text>
              <Text style={styles.RecCardTime}>11:00am-3:00pm</Text>
            </View>
          </View>
          <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Sinza</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                hic quod vel cumque dolore recusandae quam maiores, doloremque
                enim inventore error ducimus laborum consequuntur. Pariatur
                recusandae aliquid vel reiciendis sed!
              </Text>
              <Text style={styles.RecCardTime}>9:00am-5:00pm</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.scrollHeader}>Patron Approved Services</Text>
      <ScrollView pagingEnabled={true} horizontal style={styles.scroll}>
      <View style={styles.scrollContainer}>
      <View style={[styles.RecCard1]}> 
          <View style={styles.RecCardInfo1}>
            <Text style={styles.appointTitle1}>Tatoo Removal</Text>
            <Text style={styles.appointTitle2}>Masaki Clinic</Text>
            <Text style={styles.appointInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum, mollitia. Cumque reiciendis repellendus exercitationem nam harum velit id nemo quos, non qui, officia itaque asperiores eos. Consequuntur asperiores, numquam deserunt doloribus similique consectetur at dignissimos laudantium ipsa facilis unde odit, iure nemo.</Text>
          </View>
        </View>
        <View style={[styles.RecCard1]}> 
          <View style={styles.RecCardInfo1}>
            <Text style={styles.appointTitle1}>Hair Removal</Text>
            <Text style={styles.appointTitle2}>Oysterbay Clinic</Text>
            <Text style={styles.appointInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas nesciunt vitae amet, minus ex quibusdam. Dolorum, mollitia. Cumque reiciendis repellendus exercitationem nam harum velit id nemo quos, non qui, officia itaque asperiores eos. Consequuntur asperiores, numquam deserunt doloribus similique consectetur at dignissimos laudantium ipsa facilis unde odit, iure nemo.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },  
  RecCard: {
    width: 380,
    height: 150,
    margin: 15,
    borderRadius: 10,
    elevation: 30,
    backgroundColor: '#fff',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  scrollContainer:{
    backgroundColor:'#fff',
    marginTop:20,
    justifyContent:'center',
    flexDirection:'row'
  },
  scrollHeader: {
    top:10,
    marginLeft:10,
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'left',
    color: '#222',
  },
  RecCardInfo: {
    top: 10,
    left: 10,
    height: 100,
    width: 300,
    textAlign: 'left',
    color: 'black',
  },
  RecCardTitle: {
    fontFamily: 'Inter',
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardTitleSmall: {
    fontFamily: 'Inter',
    color: '#444',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardTime: {
    fontFamily: 'Inter',
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    right:-40,
    textAlign: 'right',
  },
  RecCardPara: {
    fontFamily: 'Inter',
    fontSize: 15,
    textAlign: 'left',
    color: '#222',
  },
  prodImgSmallRec: {
    top: -15,
    left: -20,
    height: 150,
    width: 230,
    resizeMode: 'contain',
  },
  RecCardInfo1:{
    height:300,
    width:250,
    textAlign:'justify',
  },
  RecCard1:{
    flex:1,
    width: 330,
    height: 460,
    margin:20,
    borderRadius: 10,
    elevation:20,
    backgroundColor: '#fff',
  },
  appointTitle1:{
    padding:10,
    width:300,
    fontFamily:'Roboto-bold',
    fontSize:50,
    color:'#888'
  },
  appointTitle2:{
    padding:10,
    width:300,
    fontFamily:'Roboto-Regular',
    fontSize:30,
    color:'#666'
  },
  appointInfo:{
    width:300,
    padding:10,
    textAlign:'left',
    fontFamily:'Inter',
    fontSize:20,
    color:'#111'
  },
})