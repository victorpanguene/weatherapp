import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import weekDisplayerStyles from './weekDisplayerStyles';
import DayTemperature from '../atoms/DayTemperature';

const WeekDisplayer = () => {
  return (
    <LinearGradient
      style={weekDisplayerStyles.backRectangle}
      colors={['#3A2B8B', '#362864']}
    >
      <DayTemperature />
      <DayTemperature />
    </LinearGradient>
  );
};

export default WeekDisplayer;
