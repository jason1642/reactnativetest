import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from "../HomePage/Home";
import SetsDirectory from '../WeatherDisplay/WeatherDisplay';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../HomePage/Header/Header'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'

const Stack = createNativeStackNavigator();

const HomeNav = ({ navigation }) => {

  return (
    // <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Weather display" component={WeatherDisplay} />
      </Stack.Navigator>
   
  )
};

export default HomeNav;