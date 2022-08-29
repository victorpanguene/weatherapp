import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const DayTemperature = () => {
  return (
    <View style={style.main}>
      <Text style={style.province}>Maputo</Text>
      <Text style={style.temperature}>30</Text>
      <Ionicons name="sunny" size={24} />
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#A594D6',
    borderRadius: 30,
    height: 165,
    marginLeft: 10,
    padding: 10,
  },
  textTest: {
    color: 'white',
    marginRight: 10,
  },
});
export default DayTemperature;
