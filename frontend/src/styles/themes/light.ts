import { DefaultTheme } from '../../@types/styles';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { defaultStyles } from './default';
import LightBackground from '../../assets/background/backgroundImageLight.jpg';

export const LightTheme: DefaultTheme = {
  name: ThemesNames.LIGHT,
  backgroundImage: LightBackground,
  defaultStyles: defaultStyles,
  styles: {
    boxShadow: `0 2px 4px -2px rgba(0, 0, 0, 0.5)`,
  },
  contrastStyles: {
    themeIconColor: '#00008B',
  },
};
