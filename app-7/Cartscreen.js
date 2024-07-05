import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

export default function Cartscreen() {
  const [fontsLoaded] = useFonts({
    'vogue-sans': require('./assets/fonts/vogue-sans-medium.ttf'),
  });

  const navigation = useNavigation(); // Initialize navigation hook

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const goToProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Section1}>
          <View>
            <Image style={styles.LogoIcon} source={require('./assets/Logo.png')} />
          </View>

          <View>
            <Image style={styles.SearchIcon} source={require('./assets/Search.png')} />
          </View>
        </View>

        <View style={styles.Section2}>
          <Text style={styles.checkout}>C H E C K O U T</Text>
          <Image style={styles.design} source={require('./assets/design.jpeg')} />
        </View>

        <View style={styles.Section3}>
          {/* Wrap the first product template with TouchableOpacity */}
          <TouchableOpacity
            style={styles.Section3template}
            onPress={() => goToProductDetail('product1')} // Replace 'product1' with actual product ID
          >
            <View>
              <Image style={styles.dressImage} source={require('./assets/dress1.png')} />
            </View>

            <View style={styles.details}>
              <Text style={styles.Name}>O F F I C E W E A R</Text>
              <Text style={styles.style}>Office wear for your office</Text>
              <Text style={styles.Price}>$120</Text>
              <Image style={styles.removeIcon} source={require('./assets/remove.png')} />
            </View>
          </TouchableOpacity>

          <View style={styles.Section3template}>
            <View>
              <Image style={styles.dressImage} source={require('./assets/dress4.png')} />
            </View>

            <View style={styles.details}>
              <Text style={styles.Name}>L A M E R E I</Text>
              <Text style={styles.style}>Recycle Boucle Knit Cardigan Pink</Text>
              <Text style={styles.Price}>$120</Text>
              <Image style={styles.removeIcon} source={require('./assets/remove.png')} />
            </View>
          </View>

          <View style={styles.Section3template}>
            <View>
              <Image style={styles.dressImage} source={require('./assets/dress3.png')} />
            </View>

            <View style={styles.details}>
              <Text style={styles.Name}>C H U R C H W E A R</Text>
              <Text style={styles.style}>Recycle Boucle Knit Cardigan Pink</Text>
              <Text style={styles.Price}>$120</Text>
              <Image style={styles.removeIcon} source={require('./assets/remove.png')} />
            </View>
          </View>
        </View>

        <View style={styles.Section4}>
          <Text style={styles.total}>E S T . T O T A L</Text>
          <Text style={styles.sumAmount}>$ 3 6 0</Text>
        </View>

        <View style={styles.Section5}>
          <Image style={styles.shoppingBag} source={require('./assets/shoppingBag.png')} />
          <Text style={styles.checkout2}>CHECKOUT</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  Section1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  LogoIcon: {
    marginLeft: 130,
  },
  Section2: {
    alignItems: 'center',
    marginTop: 30,
  },
  checkout: {
    fontSize: 25,
    fontFamily: 'vogue-sans',
  },
  design: {
    width: 130,
    height: 15,
  },
  Section3: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  Section3template: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  Name: {
    fontSize: 20,
    fontFamily: 'vogue-sans',
  },
  style: {
    color: '#838282',
    marginTop: 5,
    fontSize: 15,
  },
  Price: {
    color: '#ff735b',
    fontSize: 25,
    marginTop: 5,
    fontFamily: 'vogue-sans',
  },
  dressImage: {
    width: 120,
    height: 170,
  },
  removeIcon: {
    top: 15,
    left: 170,
  },
  details: {
    marginLeft: 10,
    width: 200,
  },
  Section4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
  },
  total: {
    fontSize: 20,
    fontFamily: 'vogue-sans',
  },
  sumAmount: {
    fontSize: 25,
    color: '#ff735b',
    fontFamily: 'vogue-sans',
  },
  Section5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 2,
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
  },
  shoppingBag: {
    tintColor: 'white',
    marginRight: 20,
  },
  checkout2: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'vogue-sans',
  },
});
