/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// import type {Node} from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeNav from './components/HomeNav/HomeNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const { navigation } = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };
  const Stack = createNativeStackNavigator();


  return (
    <SafeAreaView style={backgroundStyle}> 
      <NavigationContainer style={{flex: 1}}>
       
      
        <HomeNav />
        
      </NavigationContainer>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  fillerText: {
    // height: '50%',
    width: '100%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
