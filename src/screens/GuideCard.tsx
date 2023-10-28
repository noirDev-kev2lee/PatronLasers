import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function GuideCard({navigation}: {navigation: any}) {
  const [activeTab, setActiveTab] = useState('manuals');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrow}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <Pressable onPress={() => setActiveTab('manuals')}>
          <View
            style={[
              styles.tabItem,
              activeTab === 'manuals' && styles.activeTabItem,
            ]}>
            <Text style={styles.tabText}>Manuals</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setActiveTab('videos')}>
          <View
            style={[
              styles.tabItem,
              activeTab === 'videos' && styles.activeTabItem,
            ]}>
            <Text style={styles.tabText}>Videos</Text>
          </View>
        </Pressable>
      </View>
      {activeTab === 'manuals' && (
        <View>
          <ScrollView pagingEnabled={true} style={styles.scroll}>
            <View>
              <View style={styles.RecCard}>
                <Text style={styles.RecCardPara}>
                  The TITI device works with ultra-short technology in order to
                  damage and exert great pressure on the melanin pigment, which
                  shatters into small pieces. The small particles are absorbed
                  by the skin and disperse the various pigments that make up the
                  tattoo. This is an effective, fast, non-invasive treatment
                  that avoids the need for a complex surgical procedure.
                  Treatment for removing tattoos using the TITI device is
                  intended for treating most areas of the body such as: face,
                  hands, chest, legs and more.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
      {activeTab === 'videos' && (
        <View>
          <ScrollView pagingEnabled={true} style={styles.scroll}>
            <View>
              <View style={[styles.videoCard]}></View>
            </View>
          </ScrollView>
        </View>
      )}
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
    paddingTop: 20,
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
    color: '#222',
    fontSize: 20,
    textAlign: 'left',
  },
  guideInfoPara: {
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  RecCardSmall: {
    alignItems: 'center',
    width: 120,
    height: 150,
    margin: 2,
    marginTop: 5,
    elevation: 30,
    borderRadius: 5,
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
    textAlign: 'center',
    fontSize: 23,
    color: 'black',
  },
  RecCardPara: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'justify',
    color: 'black',
  },
  tabText: {
    color: 'black',
    fontSize: 17,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 70,
  },
  tabItem: {
    alignItems: 'center',
    padding: 16,
  },
  activeTabItem: {
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },

  activeTabText: {
    color: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backArrow: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  cardText: {},
  scroll: {},
});
