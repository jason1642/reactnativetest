import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'lightblue',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '10%',
    width: '100%'
  },
  title: {
    padding: 20,
    fontSize: 20
  }
})

const {container} = styles;

const Header = () => {

  return (
    <View style={container}>
      <Text style={styles.title}>Enter a Zipcode to see the local weather</Text>
    </View>
  )
}
export default Header;