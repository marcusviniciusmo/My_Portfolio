import 'styled-components';

export interface DefaultTheme {
  name: string;
  backgroundImage: string;
  colors: {
    boxShadow: string;
  };
  oppositeColors: {
    iconColor: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
