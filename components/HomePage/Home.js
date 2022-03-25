import React, { useState, useEffect, Component } from 'react';
import { View,TextInput,  TouchableOpacity, Text, Button, ScrollView, SafeAreaView } from "react-native";
// import type {Node} from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from './Header/Header';
import styles from './HomeStyles'

const { homeContainer, homeTitle, weatherButton, buttonText, zipcodeInput } = styles;

const Home = ({navigation}) => {
  const [userInput, setUserInput] = useState('');
  
  useEffect(() => {
    console.log(userInput)
  }, [userInput]);
  return (
    <View style={homeContainer}>
      <Header />
      {/* <Text style={homeTitle}>This is the home page</Text> */}
      <TextInput
        style={zipcodeInput}
        // autoFocus={true}
        onChangeText={text=>setUserInput(text)}
        maxLength={5}
        placeholder={"Enter Zipcode"}
      />
      <TouchableOpacity
        style={weatherButton}
        onPress={() => navigation.navigate('Weather display', {
          zipcode: userInput
        })} >
        <Text style={buttonText}>Display weather</Text>
        </TouchableOpacity>
    </View>

      
      
  )
  
};

export default Home;