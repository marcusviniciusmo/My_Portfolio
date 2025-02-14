import { ReactNode } from 'react';
import { DefaultTheme } from './styles';

export interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface ThemeContextProps {
  children: ReactNode;
}
