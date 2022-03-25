import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from "../home";
import SetsDirectory from '../SetsDirectory/SetsDirectory';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../HomePage/Header/Header'

const Stack = createNativeStackNavigator();

const HomeNav = ({ navigation }) => {

  return (
    // <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sets directory" component={SetsDirectory} />
      </Stack.Navigator>
   
  )
};

export default HomeNav;