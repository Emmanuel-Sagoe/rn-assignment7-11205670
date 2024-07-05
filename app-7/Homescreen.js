import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Homescreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'vogue-sans': require('./assets/fonts/vogue-sans-medium.ttf'),
  });

  const goToCartScreen = () => {
    navigation.navigate('Cart');
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Section1}>
          <View>
            <Image style={styles.MenuIcon} source={require('./assets/Menu.png')} />
          </View>

          <View>
            <Image style={styles.LogoIcon} source={require('./assets/Logo.png')} />
          </View>

          <View style={styles.BagandSearch}>
            <Image style={styles.SearchIcon} source={require('./assets/Search.png')} />

            <TouchableOpacity onPress={goToCartScreen}>
              <Image style={styles.Bag} source={require('./assets/shoppingBag.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Section2}>
          <View>
            <Text style={styles.OurStory}>O U R   S T O R Y</Text>
          </View>

          <View style={styles.Filters}>
            <View style={styles.Ellipse}>
              <Image style={styles.listIcon} source={require('./assets/list.png')} />
            </View>

            <View style={styles.Ellipse}>
              <Image style={styles.filterIcon} source={require('./assets/filter.png')} />
            </View>
          </View>
        </View>

        <View style={styles.Section3}>
          <View style={styles.Section3template}>
            <Image style={styles.dress} source={require('./assets/dress1.png')} />
            <Text style={styles.Name}>Office Wear</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>

          <View>
            <Image style={styles.dress} source={require('./assets/dress2.png')} />
            <Text style={styles.Name}>Black</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>
        </View>

        <View style={styles.Section3}>
          <View style={styles.Section3template}>
            <Image style={styles.dress} source={require('./assets/dress3.png')} />
            <Text style={styles.Name}>Church Wear</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>

          <View>
            <Image style={styles.dress} source={require('./assets/dress4.png')} />
            <Text style={styles.Name}>Lamerei</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>
        </View>

        <View style={styles.Section3}>
          <View style={styles.Section3template}>
            <Image style={styles.dress} source={require('./assets/dress5.png')} />
            <Text style={styles.Name}>21WN</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>

          <View>
            <Image style={styles.dress} source={require('./assets/dress6.png')} />
            <Text style={styles.Name}>Lopo</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>
        </View>

        <View style={styles.Section3}>
          <View style={styles.Section3template}>
            <Image style={styles.dress} source={require('./assets/dress7.png')} />
            <Text style={styles.Name}>21WN</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
          </View>

          <View>
            <Image style={styles.dress} source={require('./assets/dress3.png')} />
            <Text style={styles.Name}>lame</Text>
            <Text style={styles.style}>reversible angora cardigan</Text>
            <Text style={styles.Price}>$120</Text>
            <Image style={styles.addImage} source={require('./assets/add_circle.png')} />
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
    marginTop: 30,
  },
  Section1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  LogoIcon: {
    marginLeft: 50,
  },
  BagandSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Bag: {
    marginLeft: 30,
  },
  Section2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  OurStory: {
    fontSize: 25,
    fontFamily: 'vogue-sans',
  },
  Filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: '#ff735b',
  },
  listIcon: {
    tintColor: '#838282',
    width: 20,
    height: 20,
  },
  Ellipse: {
    marginLeft: -15,
    marginRight: -5,
    backgroundColor: '#f0f0f0',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Section3: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: -20,
  },
  Section3template: {
    marginRight: 10,
    marginLeft: 10,
  },
  addImage: {
    top: -102,
    left: 135,
  },
  Name: {
    fontSize: 15,
    marginTop: 5,
  },
  style: {
    color: '#838282',
  },
  Price: {
    color: '#ff735b',
    fontSize: 25,
    fontFamily: 'vogue-sans',
  },
});
