import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function GuideCard() {
  const route = useRoute();
  const data = route.params as {
    desc: string;
    name: string;
    category: string;
    img: any;
  };
  const {desc, name} = data;
  return (
    <View style={styles.container}>
      <View style={styles.guideTopinfo}>
        <View style={styles.guideInfo}>
          <Text style={styles.guideInfoTitle}>{name}</Text>
          <Text style={styles.guideInfoPara}>{desc}</Text>
        </View>
        
      </View>
      <ScrollView pagingEnabled={true} horizontal style={styles.scroll}>
        <View style={styles.scrollContainer}>
          <View style={styles.RecCard}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Manuals</Text>
              <Text style={styles.RecCardPara}>
              The TITI device works with ultra-short technology in order to damage and exert great pressure on the melanin pigment, which shatters into small pieces. The small particles are absorbed by the skin and disperse the various pigments that make up the tattoo. This is an effective, fast, non-invasive treatment that avoids the need for a complex surgical procedure. Treatment for removing tattoos using the TITI device is intended for treating most areas of the body such as: face, hands, chest, legs and more. 
              </Text>
            </View>
          </View>
          {/* <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfoVideo}>
              <Text style={styles.RecCardTitle}>Video Guides</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <View style={styles.scrollsec}>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product One</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Two</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                  </View>
                  <View style={styles.scrollsec}>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                  </View>
                  <View style={styles.scrollsec}>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                    <View style={[styles.RecCardSmall]}>
                      <Text style={styles.cardText}>Product Three</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View> */}
          <View style={[styles.RecCard]}>
            <View style={styles.RecCardInfo}>
              <Text style={styles.RecCardTitle}>Articles</Text>
              <Text style={styles.RecCardPara}>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingTop: 60,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    backgroundColor: '#888',
  },
  scrollsec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  prodImg: {
    right: 30,
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },

  guideTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 40,
  },
  guideTopinfo: {
    top: 10,
    flexDirection: 'row-reverse',
    width: 380,
    height: 150,
    margin: 10,
  },
  guideInfo: {
    top: 0,
    left: 10,
    height: 100,
    width: 230,
    textAlign: 'left',
  },
  guideInfoTitle: {
    fontFamily: 'Inter',
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  guideInfoPara: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    textAlign: 'justify',
    color: '#222',
  },
  prodImgSmallRec: {
    top: -15,
    left: -20,
    height: 150,
    width: 230,
    resizeMode: 'stretch',
  },
  prodImgSmall: {
    margin: -5,
    height: 140,
    width: 240,
    resizeMode: 'contain',
  },
  scrollHeader: {
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#888',
    color: '#fff',
  },
  RecCard: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: 400,
    height: 500,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#888',
  },
  RecCardSmall: {
    alignItems: 'center',
    width: 120,
    height: 150,
    margin: 2,
    marginTop: 5,
    elevation: 30,
    borderRadius: 5,
    backgroundColor: '#555',
  },
  RecCardInfo: {
    height: 300,
    width: 390,
    textAlign: 'justify',
  },
  RecCardInfoVideo: {
    height: 480,
    width: 400,
    textAlign: 'justify',
  },
  RecCardTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    textAlign: 'center',
    top: -40,
    fontSize: 30,
    color: '#fff',
  },
  RecCardPara: {
    top: -20,
    marginTop: 5,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#fff',
  },
  cardText: {},
  scroll: {},
});
