import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function PatientAds() {
  return (
    <View>
      <ScrollView
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scroll}>
        <View style={styles.container}>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Tandale Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
              The device produces electric pulses that pass to the skin, the currents in the different programs differ from each other in the frequency of the electric signal, its duration, the type of wave, the pause time from pulse to pulse and the duration of the time when the electric wave is at its peak.
              </Text>
             
            </View>
          </View>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Oyseterbay Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
              Passes in a targeted manner through the skin, penetrates the upper layer of the SMAS tissue in the neuromuscular system, and damages the elastin and collagen fibers, thereby producing a natural facelift, and encourages the regeneration of the elastin and collagen. 
              </Text>
              
            </View>
          </View>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Masaki Clinic</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
              The RAY tanning machine system is multiplied in such a way that all the light rays are focused on the patient's body area only, therefore the effectiveness of the technology proves the result
              </Text>
              
            </View>
          </View>
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Sinza</Text>
              <Text style={styles.RecCardTitleSmall}>Kinondoni</Text>
              <Text style={styles.RecCardPara}>
              The RAY tanning machine comes with a cluster of 200w *turbo* light bulbs that redefine the tanning method, in addition, all machines are equipped with a light emitting casing that returns and multiplies the UV rays meeting the body and ensures the most effective tanning from the very first moment.
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
              <Text style={styles.appointInfo}>
              The device produces electric pulses that pass to the skin, the currents in the different programs differ from each other in the frequency of the electric signal, its duration, the type of wave, the pause time from pulse to pulse and the duration of the time when the electric wave is at its peak.
              </Text>
            </View>
          </View>
          <View style={[styles.RecCard1]}>
            <View style={styles.RecCardInfo1}>
              <Text style={styles.appointTitle1}>Hair Removal</Text>
              <Text style={styles.appointTitle2}>Oysterbay Clinic</Text>
              <Text style={styles.appointInfo}>
              The TITI device works with ultra-short technology in order to damage and exert great pressure on the melanin pigment, which shatters into small pieces. The small particles are absorbed by the skin and disperse the various pigments that make up the tattoo. This is an effective, fast, non-invasive treatment that avoids the need for a complex surgical procedure. Treatment for removing tattoos using the TITI device is intended for treating most areas of the body such as: face, hands, chest, legs and more. 
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  RecCard: {
    width: 380,
    height: 190,
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
  scrollContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
  },
  scrollHeader: {
    top: 10,
    marginLeft: 10,
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
    right: -40,
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
  RecCardInfo1: {
    height: 300,
    width: 250,
    textAlign: 'justify',
  },
  RecCard1: {
    flex: 1,
    width: 330,
    height: 460,
    margin: 20,
    borderRadius: 10,
    elevation: 20,
    backgroundColor: '#fff',
  },
  appointTitle1: {
    padding: 10,
    width: 300,
    fontFamily: 'Roboto-bold',
    fontSize: 30,
    color: '#888',
  },
  appointTitle2: {
    padding: 10,
    width: 300,
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#666',
  },
  appointInfo: {
    width: 300,
    padding: 10,
    textAlign: 'left',
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#111',
  },
  scroll: {},
});
