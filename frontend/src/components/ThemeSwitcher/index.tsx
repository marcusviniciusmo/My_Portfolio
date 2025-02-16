import { useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../@types/theme';
import { ThemeNames } from '../../enums/theme';
import { ThemeSwitcherContainer } from './styles';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <ThemeSwitcherContainer
      onClick={toggleTheme}
      title={`${theme.name === ThemeNames.LIGHT ? ThemeNames.DARK : ThemeNames.LIGHT} Mode`}
    >
      {theme.name === ThemeNames.LIGHT ? (
        <DarkMode fontSize="large" />
      ) : (
        <LightMode fontSize="large" />
      )}
    </ThemeSwitcherContainer>
  );
}
