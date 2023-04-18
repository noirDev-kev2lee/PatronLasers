import {Text, StyleSheet, View, ScrollView, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProductCard() {
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
    if (scrollDirection === 'down') {
      handleScrollTo(500);
      setScrollDirection('up');
    } else {
      handleScrollTo(0);
      setScrollDirection('down');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.subText}>{category}</Text>
      </View>
      <ScrollView ref={scrollViewRef} style={styles.Info}>
        <Text style={styles.prodTitle}>Introduction</Text>
        <Text style={styles.prodInfo}>{desc}</Text>
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
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  subText: {
    color: '#888',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 20,
  },
  Info: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 400,
    height: 100,
    backgroundColor: 'white',
  },
  prodTitle: {
    fontFamily: 'Inter-Bold',
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
