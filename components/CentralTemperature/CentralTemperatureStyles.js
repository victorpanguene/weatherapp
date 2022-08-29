import { Dimensions, StyleSheet } from 'react-native';

const { x, y } = Dimensions.get('window');
const centralTempStyles = StyleSheet.create({
  mainTemp: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  tempDetail: {
    display: 'flex',
    flexDirection: 'row',
    gap: '.9rem',
    alignContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    fontSize: 48,
    color: 'white',
  },
  ionIconSun: {
    color: 'yellow',
  },
});

export default centralTempStyles;
