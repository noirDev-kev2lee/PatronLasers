import {Text, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function ProductCard() {
  const route = useRoute();
  const desc = route.params?.desc;
  return (
    <View style={styles.container}>
      <View style={styles.prodImgContainer}>
        <Image
          style={styles.prodImg}
          source={require('../assets/product1.png')}
        />
      </View>
      <View style={styles.Info}>
        <Text style={styles.prodTitle}>This is the title</Text>
        <Text style={styles.prodInfo}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  prodImgContainer: {
    top: 40,
    height: 380,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 80,
  },
  prodImg: {
    height: 350,
    width: 350,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  Info:{
    top:60,
    width:400,
    height:300,
    paddingHorizontal:10
  },
  prodTitle:{
    fontFamily:'Inter-Bold',
    marginBottom:10,
    fontSize:30
  },
  prodInfo:{
    fontSize:20,
    textAlign:'justify',
  }
});
