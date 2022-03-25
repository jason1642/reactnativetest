import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView } from "react-native";
// import type {Node} from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from './HomePage/Header/Header';

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
    color: "black",
    backgroundColor: "yellow"
  },
  homeTitle: {
    fontSize: 42
  },
  bottomSection: {
    height: 500,
    width: '100%',
    backgroundColor: 'teal'
  }
})
const { homeContainer, homeTitle } = styles;

const Home = ({ navigation }) => {

  
  return (
    // <View >
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={homeContainer}>
      <Header />
      <Button
        title="press to go to the second page"
        onPress={() => navigation.navigate('Sets directory', { name: 'Jason' })}>

      </Button>
      <View style={styles.bottomSection}>
        <Text>This is the bottom section</Text>
      </View>
        </ScrollView>
    </SafeAreaView>

      
      
  )
  
};

export default Home;