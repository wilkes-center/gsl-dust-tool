import theme from './theme';

export type ThemeType = typeof theme;

// Extend the DefaultTheme from styled-components to use our theme type
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}