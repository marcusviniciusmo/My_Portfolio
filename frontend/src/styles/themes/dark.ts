import { DefaultTheme } from '../../@types/styles';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { defaultStyles } from './default';
import DarkBackground from '../../assets/background/backgroundImageDark.jpg';

export const DarkTheme: DefaultTheme = {
  name: ThemesNames.DARK,
  backgroundImage: DarkBackground,
  defaultStyles: defaultStyles,
  styles: {
    boxShadow: `0 2px 4px -2px rgba(255, 255, 255, 0.5)`,
  },
  contrastStyles: {
    themeIconColor: '#FFA500',
  },
};
