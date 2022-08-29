import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function WeeklyTemps() {
  const navigator = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigator.navigate('Home')}
        style={{
          top: 40,
          left: 20,
          height: 80,
          width: 80,
          backgroundColor: 'grey',
        }}
      >
        <Text>WeeklyTemps</Text>
      </TouchableOpacity>
    </View>
  );
}
