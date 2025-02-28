import 'styled-components';
import { NetworksIconsColorsType } from './networks';

export interface DefaultTheme {
  name: string;
  backgroundImage: string;
  defaultStyles: DefaultStylesType;
  styles: {
    primaryBackground: string;
    secondaryBackground: string;
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    primaryBorder: string;
    boxShadow: string;
    shadow: string;
  };
  contrastStyles: {
    themeIconColor: string;
  };
  networksIconsColors: NetworksIconsColorsType;
}

export interface DefaultStylesType {
  baseBackground: string;
  baseColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
