import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import Details from './screens/Details';
import Checkout from './screens/Checkout';

export type RootStackPramsList = {
  Home: undefined;
  Details: {product: Product};
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramsList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'trending products'}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{title: 'product details'}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{title: 'Select A payment meathod'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
