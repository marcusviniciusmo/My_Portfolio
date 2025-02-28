import { DefaultTheme } from '../../@types/styles';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { defaultStyles } from './default';
import DarkBackground from '../../assets/background/backgroundImageDark.jpg';

export const DarkTheme: DefaultTheme = {
  name: ThemesNames.DARK,
  backgroundImage: DarkBackground,
  defaultStyles: defaultStyles,
  styles: {
    primaryBackground: '#111111',
    secondaryBackground: '#212425',
    primaryColor: '#FFFFFF',
    tertiaryColor: '#A6A6A6',
    boxShadow: `0 2px 4px -2px rgba(255, 255, 255, 0.5)`,
    shadow: '0 20px 13px rgba(255, 255, 255, 0.1)',
  },
  contrastStyles: {
    themeIconColor: '#FFA500',
  },
  networksIconsColors: {
    LINKEDIN: '#E9E9EA',
    GITHUB: '#FFFFFF',
    WHATSAPP: '#B5FFAA',
    INSTAGRAM: '#E1146C',
    EMAIL: '#2EDCFD',
  },
};
