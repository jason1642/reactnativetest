import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import axios from 'axios';
import ErrorDisplay from './ErrorDisplay';

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "black"
  },
  weatherDisplayContainer: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'space-around'
    alignItems: 'center'
  },
  icon: {
    height: 200,
    width: 200,
    marginTop: 140,
    zIndex: 5,
   
  }
})
const options = zipcode => {
  return ({
    method: 'GET',
    url: `http://localhost:8080/api/weather/${zipcode}`
  })
};
const SetsDirectory = ({route, navigation}) => {
  const mountedRef = useRef(true)
  const [weatherData, setWeatherData] = useState(false);


  useEffect(() => {
    console.log(route);
    axios.request(options(route.params.zipcode))
      .then(response => {
        setWeatherData(response.data);
        
      }).catch(err=>setWeatherData(false))
    return () => {
      mountedRef.current = false;
    }
  }, []);

  if (weatherData.location !== undefined) return (
    <View style={styles.weatherDisplayContainer}>
     
      <Image
          style={styles.icon}
          source={{ uri: `https:${weatherData.current.condition.icon}`}}
        />
        
      <Text>
        The weather in {weatherData.location.name + ', ' + weatherData.location.region} is
        {console.log(weatherData.current.condition.icon.substring(2), "THIS IS FROM THE TEXT COMPONENT")}
      </Text>
      
      <View>
        <Text>{weatherData.current.temp_f} degrees {weatherData.current.condition.text}</Text>
      </View>

      
    </View>
  )
  else return <ErrorDisplay navigation={navigation} />;
};
export default SetsDirectory;