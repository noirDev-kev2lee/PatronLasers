import {Text, StyleSheet, View, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import React, {useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductCard() {
  const windowWidth = useWindowDimensions().width;
  const route = useRoute();
  const data = route.params as {desc: string; name: string; category: string};
  const {desc, name, category} = data;
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down'>(
    'down',
  );

  const scrollViewRef = useRef<ScrollView>(null);
  const handleScrollTo = (y: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y, animated: true});
    }
  };

  const handleScroll = () => {
    const scrollToValue = scrollDirection === 'down' ? 500 : 0;
    handleScrollTo(scrollToValue);
    setScrollDirection(scrollDirection === 'down' ? 'up' : 'down');
  };
  const htmlRenderStyles = StyleSheet.create({
    baseText: {
      color: 'black', 
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.subText}>{category}</Text>
      </View>
      <ScrollView ref={scrollViewRef} style={styles.Info}>
        <View style={styles.htmlView} >
      <HTML source={{ html: desc }} contentWidth={windowWidth} baseStyle={htmlRenderStyles.baseText} />
    </View>
      </ScrollView>
      <Pressable style={styles.scrollBtn} onPress={handleScroll}>
        <Icon
          name={
            scrollDirection === 'down'
              ? 'keyboard-arrow-down'
              : 'keyboard-arrow-up'
          }
          size={52}
          color="white"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EDED',
  },
  headerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  subText: {
    color: '#888',
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 17,
  },
  htmlView: {
    paddingBottom: 100,
  },
  Info: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },
  prodTitle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginBottom: 10,
    color: '#888',
    fontSize: 30,
  },
  prodInfo: {
    color: '#222',
    fontSize: 20,
    textAlign: 'justify',
  },
  scrollBtn: {
    position: 'absolute',
    bottom: 30,
    right: 180,
    zIndex: 1,
    height: 64,
    width: 64,
    borderRadius: 54,
    backgroundColor: '#131035',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
