import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native-gesture-handler';

export default function ProductDetailScreen({ route }) {
  const [fontsLoaded] = useFonts({
    'vogue-sans': require('./assets/fonts/vogue-sans-medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const { productId } = route.params;

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
                    <View>
                      <Image style={styles.Bag} source={require('./assets/shoppingBag.png')} />
                    </View>
                  </View>
                </View>

                <Image style={styles.Dress1} source={require('./assets/dress1.png')} />
                
                <View style={styles.Section2}>
                  <Text style={styles.dressName}>O f f i c e  W e a r</Text>
                  <Image style={styles.ExportIcon} source={require('./assets/Export.png')} />
                </View>
            
              <Text style={styles.dressStyle}>reversible angora cardigan</Text>

                <Text style={styles.price}>$120</Text>

                <Text style={styles.materials}>M a t e r i a l s</Text>

                <Text style={styles.materialsText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>

                <View style={styles.Section3}>

                  <View style={styles.warningSection}> 
                  <Image style={styles.warningImage}  source={require('./assets/Do Not Bleach.png')} />
                  <Text  style={styles.warningText}>Do not use bleach</Text>
                  </View>

                  <View style={styles.warningSection}>
                  <Image style={styles.warningImage}   source={require('./assets/Do Not Tumble Dry.png')} />
                  <Text  style={styles.warningText}>Do not tumble dry</Text>
                  </View>

                  <View style={styles.warningSection}>
                  <Image style={styles.warningImage}    source={require('./assets/Do Not Wash.png')} />
                  <Text  style={styles.warningText}>Dry clean with tetrachloroethylene</Text>
                  </View>

                  <View style={styles.warningSection}>
                  <Image style={styles.warningImage}   source={require('./assets/Iron Low Temperature.png')} />
                  <Text  style={styles.warningText}>Iron at a maximum of 110oC/230oF</Text>
                  </View>

                </View>

                <View style={styles.Section4}>
                <Image style={styles.shippingImage}   source={require('./assets/Shipping.png')} />
                <Text style={styles.shippingHeader} >Free Flat Rate Shipping</Text>
                <Image style={styles.UpImage}   source={require('./assets/Up.png')} />
                </View>

                <Text style={styles.deliveryDate}>Estimated to be delivered on</Text>
                <Text style={styles.deliveryDate}>09/11/2021 - 12/11/2021.</Text>

                <View style={styles.Section5}>
                <Image style={styles.PlusIcon} source={require('./assets/Plus.png')} />
                <Text style={styles.addToBasket}>ADD TO BASKET</Text>
                <Image style={styles.HeartIcon} source={require('./assets/Heart.png')} />
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
  Dress1: {
    width:330,
    height:450,
    marginLeft:13,
    marginTop:20,
  },
  Section2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:25,
    marginRight:25,
    marginTop:20,
  },
  dressName: {
    fontFamily: 'vogue-sans',
    fontSize: 25,
  },
  dressStyle: {
    color: '#838282',
    marginTop: 5,
    fontSize: 15,
    marginLeft:25,
  },
  price: {
    color: '#ff735b',
    fontSize: 25,
    marginTop: 5,
    fontFamily: 'vogue-sans',
    marginLeft:25,
  },
  materials: {
    fontSize: 20,
    fontFamily: 'vogue-sans',
    marginTop:20,
    marginLeft:25,
  },
  materialsText: {
    color: '#838282',
    marginTop: 5,
    fontSize: 15,
    marginLeft:25,
    width:300,
    lineHeight:25,
  },
  Section3: {
    marginLeft:25,
    display:'flex',
    flexDirection:'column',
    marginTop:20,
    borderBottomColor: '#838282',
    borderBottomWidth:2,
    marginBottom:30,
    paddingBottom:20,
    width:300,
  },
  warningSection: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  warningImage: {
    marginRight:15,
    tintColor: '#838282',
    height:30,
    width:30,
  },
  warningText: {
    color: '#838282',
    fontSize:15,
  },
  Section4: {
    display:'flex',
    flexDirection:'row',
    marginLeft:25,
    justifyContent:'space-between',
    alignItems:'center',
  },
   shippingImage:{
    height:30,
    width:30,
    marginRight:-50,
   },
   shippingHeader: {
    fontSize:15, 
   },
   UpImage:{
    marginRight:50,
   },
   deliveryDate:{
    color: '#838282',
    fontSize:15,
    marginLeft:70,
    lineHeight:25,
   },
   Section5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 150,
    marginBottom: 2,
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
  },
  PlusIcon: {
    tintColor: 'white',
    height:30,
    width:30,
    marginLeft:13,
    marginRight:-80,
  },
  addToBasket:{
    color:'white',
    fontFamily: 'vogue-sans',
    fontSize:20,
  },
  HeartIcon:{
    height:30,
    width:30,
    tintColor: 'white',
    marginRight:40,
  }
});