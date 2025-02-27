import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../@types/theme';

export function ThemeSwitcher() {
  const { toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <h1>THEME SWITCHER COMPONENT</h1>
    </button>
  );
}
