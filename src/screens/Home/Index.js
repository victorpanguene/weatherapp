import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import Country from '../../../components/atoms/Country';
import Hmenu from '../../../components/atoms/Hmenu';
import CentralTemperature from '../../../components/CentralTemperature/CentralTemperature';
import WeekDisplayer from '../../../components/WeekDisplayer/WeekDisplayer';

export default function Home() {
  const mainStyles = StyleSheet.create({
    mainView: {
      flex: 1,
    },
  });

  const navigator = useNavigation();
  const screenHandler = () => {
    navigator.navigate('WeeklyTemps');
  };

  return (
    <LinearGradient
      style={mainStyles.mainView}
      colors={['rgba(79,57,147, 1)', 'rgba(20, 17, 60, 1)']}
    >
      <Hmenu switchScreen={screenHandler} />
      <Country />
      <CentralTemperature />
      <WeekDisplayer />
    </LinearGradient>
  );
}
