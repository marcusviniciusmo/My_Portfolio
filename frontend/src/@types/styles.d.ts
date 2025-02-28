import 'styled-components';

export interface DefaultTheme {
  name: string;
  backgroundImage: string;
  defaultStyles: DefaultStylesType;
  styles: {
    primaryBackground: string;
    secondaryBackground: string;
    primaryColor: string;
    tertiaryColor: string;
    boxShadow: string;
    shadow: string;
  };
  contrastStyles: {
    themeIconColor: string;
  };
}

export interface DefaultStylesType {
  baseBackground: string;
  baseColor: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
