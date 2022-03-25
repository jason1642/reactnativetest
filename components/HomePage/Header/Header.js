import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    height: '150%',
    width: '100%',
    flex: 1
  },
  title: {
    padding: '10%'
  }
})

const {container} = styles;

const Header = () => {

  return (
    <View style={container}>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
      <Text style={styles.title}>This is the header</Text>
    </View>
  )
}
export default Header;