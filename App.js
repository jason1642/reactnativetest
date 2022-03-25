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
import Home from './components/home';
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
  // const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };
  const Stack = createNativeStackNavigator();


  return (
    <SafeAreaView style={backgroundStyle}> 
      <NavigationContainer style={{flex: 1}}>
        {/* <ScrollView style={{flex: 1}}> */}
      <Stack.Screen name="Header" component={Header} />

        <HomeNav />
        <Text
        style={styles.fillerText}>112233334411223</Text>
      {/* </ScrollView> */}
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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
