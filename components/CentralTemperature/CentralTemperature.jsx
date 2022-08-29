import React from 'react';
import { Text, View } from 'react-native';
import centralTempStyles from './CentralTemperatureStyles';
import Ionicons from '@expo/vector-icons/Ionicons';

const CentralTemperature = () => {
  return (
    <View style={centralTempStyles.mainTemp}>
      <View style={centralTempStyles.tempDetail}>
        <Ionicons name="sunny" style={centralTempStyles.ionIconSun} size={48} />
        <Text style={centralTempStyles.textColor}>42</Text>
      </View>
    </View>
  );
};

export default CentralTemperature;
