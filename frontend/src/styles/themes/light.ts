import { DefaultTheme } from '../../@types/styles';
import { ThemeNames } from '../../enums/theme';

export const LightTheme: DefaultTheme = {
  name: ThemeNames.LIGHT,
  colors: {
    boxShadow: '0 2px 4px -2px rgba(0, 0, 0, 0.5)',
  },
  oppositeColors: {
    iconColor: '#00008B',
  },
};
