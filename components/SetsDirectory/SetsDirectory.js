import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: "black"
  },
  setsDirectoryContainer: {
    flex: 1
  }
})
const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  headers: {
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '95e9fc104dmsha6ddc418cd1fc07p1de64cjsn2088bc16337e'
  }
};


// Display names of sets, names are links that will navigate to next stack screen with sets info  
const SetsDirectory = ({navigation}) => {
  const mountedRef = useRef(true)
  const [hearthData, setHearthData] = useState();


  const requestHearthstoneData = () => {
    axios.request(options)
      .then(response => {
      setHearthData(response.data)
      // console.log(response.data);
    })
      .catch(err => {
      console.error(err);
    });
    
  }

  const expressRequest = () => {
    axios.get('http://localhost:8080/api/blizzard/all-sets-names')
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    requestHearthstoneData();
    return () => {
      mountedRef.current = false;
    }
  }, []);

  return (
    <ScrollView style={styles.setsDirectoryContainer}>
      <Button
      title="express test"
      onPress={expressRequest}
      /> 
      {hearthData &&
        hearthData.classes.map((ele, i)=>
          <Text
            key={i}
            style={styles.title}>
            {ele}
          </Text>
        )
      }
    </ScrollView>
  )
};
export default SetsDirectory;