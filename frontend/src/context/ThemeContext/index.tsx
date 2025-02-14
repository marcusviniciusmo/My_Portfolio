import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContextType, ThemeContextProps } from '../../@types/theme';
import { DefaultTheme } from '../../@types/styles';
import { ThemeNames } from '../../enums/theme';
import { LightTheme } from '../../styles/themes/light';
import { DarkTheme } from '../../styles/themes/dark';

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storedTheme = localStorage.getItem('theme') as ThemeNames;

    return storedTheme === ThemeNames.DARK ? DarkTheme : LightTheme;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.name);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme.name === ThemeNames.LIGHT ? DarkTheme : LightTheme,
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
