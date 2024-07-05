import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


function ProductDetailScreen({ route }) {
  const { productId } = route.params;

  

  return (
    <View style={styles.container}>
      
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
});

export default ProductDetailScreen;

