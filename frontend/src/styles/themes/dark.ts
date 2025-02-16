import { DefaultTheme } from '../../@types/styles';
import { ThemeNames } from '../../enums/theme';
import DarBackgroundImage from '../../assets/Background/backgroundImageDark.jpg';

export const DarkTheme: DefaultTheme = {
  name: ThemeNames.DARK,
  backgroundImage: DarBackgroundImage,
  colors: {
    boxShadow: '0 2px 4px -2px rgba(255, 255, 255, 0.5)',
  },
  oppositeColors: {
    iconColor: '#FFA500',
  },
};
