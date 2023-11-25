import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HTML from 'react-native-render-html';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function GuideCard({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const windowWidth = useWindowDimensions().width;
  const [activeTab, setActiveTab] = useState('manuals');
  const {name, desc} = route?.params;
  const htmlRenderStyles = StyleSheet.create({
    baseText: {
      color: 'black',
    },
  });
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
          <ScrollView pagingEnabled={true}>
            <View>
              <View style={styles.RecCard}>
                <Text
                  style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
                  {name}
                </Text>
                <ScrollView style={styles.Info}>
                  <View style={styles.htmlView}>
                    <HTML
                      source={{html: desc}}
                      contentWidth={windowWidth}
                      baseStyle={htmlRenderStyles.baseText}
                    />
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
      {activeTab === 'videos' && (
        <View>
          <ScrollView pagingEnabled={true}>
            <View style={styles.videoContainer}>
              <View>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={'WN2Sd-D-Ds8'}
                />
              </View>
              {/* <View>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={'CUvbL6fU9Uc'}
                />
              </View> */}
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
  Info: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },
  htmlView: {
    paddingBottom: 100,
  },
  videoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
