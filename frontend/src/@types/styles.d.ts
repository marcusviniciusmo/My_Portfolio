import 'styled-components';

export interface DefaultTheme {
  name: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
