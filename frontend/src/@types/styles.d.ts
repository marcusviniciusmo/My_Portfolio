import 'styled-components';

export interface DefaultTheme {}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultTheme {}
}
