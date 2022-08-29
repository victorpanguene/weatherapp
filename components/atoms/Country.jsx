import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Country = () => {
  return (
    <View style={countryStyles.main}>
      <Text style={countryStyles.text}>Mozambique</Text>
      <Text style={countryStyles.bold}>Maputo</Text>
      <Text style={countryStyles.text}>Capital City</Text>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const textSizing = 18;
const countryStyles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: height * 0.1,
    left: width * 0.07,
  },
  text: {
    color: 'white',
    fontSize: textSizing,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default Country;
