import {StyleSheet} from 'react-native';
import Colors from './colors.style';

const extraSmallFontSize= {
  fontSize: 10,
}

export default StyleSheet.create({

  EXTRA_SMALL_GRAY_REGULAR_TEXT: {
    ...extraSmallFontSize,
    fontFamily: 'Montserrat-Regular',
    color: Colors.black
  },
});
