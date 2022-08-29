import { StyleSheet, Dimensions } from 'react-native';

const { x, y } = Dimensions.get('window');
const weekDisplayerStyles = StyleSheet.create({
  backRectangle: {
    position: 'absolute',
    left: '30%',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    width: '70%',
    bottom: '10%',
    padding: 8,

    display: 'flex',
    flexDirection: 'row',
  },
});

export default weekDisplayerStyles;
