import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
// import {useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    padding: 15,
    marginTop: 40,
    backgroundColor: '#4287f5',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  }
});

// const { navigation } = useNavigation;
const ErrorDisplay = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text
      style={styles.title}>There was an error in your request</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={()=>navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Return Home</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default ErrorDisplay;