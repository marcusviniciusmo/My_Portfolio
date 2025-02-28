import { DefaultTheme } from '../../@types/styles';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { defaultStyles } from './default';
import LightBackground from '../../assets/background/backgroundImageLight.jpg';

export const LightTheme: DefaultTheme = {
  name: ThemesNames.LIGHT,
  backgroundImage: LightBackground,
  defaultStyles: defaultStyles,
  styles: {
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#F3F6F6',
    primaryColor: '#000000',
    secondaryColor: '#44566C',
    tertiaryColor: '#7B7B7B',
    primaryBorder: '#E3E3E3',
    boxShadow: `0 2px 4px -2px rgba(0, 0, 0, 0.5)`,
    shadow: '0 20px 13px rgba(0, 0, 0, 0.1)',
  },
  contrastStyles: {
    themeIconColor: '#00008B',
  },
  networksIconsColors: {
    LINKEDIN: '#0175B4',
    GITHUB: '#181515',
    WHATSAPP: '#23D366',
    INSTAGRAM: '#F04B5A',
    EMAIL: '#0363B8',
  },
};
