import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../../@types/styles';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { LightTheme } from '../../styles/themes/light';
import { DarkTheme } from '../../styles/themes/dark';

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeContextProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme.name === ThemesNames.LIGHT ? DarkTheme : LightTheme,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
