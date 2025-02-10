import 'styled-components';

export const defaultTheme = {};

export type DefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
