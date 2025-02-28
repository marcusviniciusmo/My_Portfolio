import { useContext } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeContextType } from '../../@types/theme';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { ThemeSwitcherContainer } from './styles';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);

  const isLightTheme = theme.name === ThemesNames.LIGHT;
  const IconTheme = isLightTheme ? DarkMode : LightMode;
  const title = `${isLightTheme ? ThemesNames.DARK : ThemesNames.LIGHT} Mode`;

  return (
    <ThemeSwitcherContainer onClick={toggleTheme} title={title}>
      <IconTheme fontSize="large" />
    </ThemeSwitcherContainer>
  );
}
