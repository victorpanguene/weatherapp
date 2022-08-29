import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const Hmenu = (props) => {
  return (
    <TouchableOpacity style={menu.hmenu} onPress={props.switchScreen}>
      <Ionicons name="menu" size={36} color="white" />
    </TouchableOpacity>
  );
};

const menu = StyleSheet.create({
  hmenu: {
    zIndex: 1,
    left: '88%',
    top: height * 0.06,
  },
});

export default Hmenu;
