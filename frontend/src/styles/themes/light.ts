import { DefaultTheme } from '../../@types/styles';
import { ThemeNames } from '../../enums/theme';
import LightBackgroundImage from '../../assets/Background/backgroundImageLight.jpg';

export const LightTheme: DefaultTheme = {
  name: ThemeNames.LIGHT,
  backgroundImage: LightBackgroundImage,
  colors: {
    boxShadow: '0 2px 4px -2px rgba(0, 0, 0, 0.5)',
  },
  oppositeColors: {
    iconColor: '#00008B',
  },
};
