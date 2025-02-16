import { DefaultTheme } from '../../@types/styles';
import { ThemeNames } from '../../enums/theme';

export const DarkTheme: DefaultTheme = {
  name: ThemeNames.DARK,
  colors: {
    boxShadow: '0 2px 4px -2px rgba(255, 255, 255, 0.5)',
  },
  oppositeColors: {
    iconColor: '#FFA500',
  },
};
