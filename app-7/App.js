// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './Homescreen';
import Cartscreen from './Cartscreen';
import ProductDetailScreen from './ProductDetailScreen'; // Assuming you have imported ProductDetailScreen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Cart"
          component={Cartscreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: '', headerShown: false }} // Remove title and hide header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

