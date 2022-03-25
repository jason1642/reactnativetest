import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    // justifyContent: "space-between", 
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
    color: "black",
    // backgroundColor: "grey"
  },
  homeTitle: {
    fontSize: 42
  },
  weatherButton: {
    padding: 15,
    marginTop: 40,
    backgroundColor: '#4287f5',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  zipcodeInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: "60%",
    padding: 20,
    fontSize: 25,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    textAlignVertical: 'top',
    marginTop: 140,
    borderColor: '#4287f5',
    borderWidth: 1
  }
  
})

export default styles;