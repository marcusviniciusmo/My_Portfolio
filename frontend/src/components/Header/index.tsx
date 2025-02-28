import { Home } from '@mui/icons-material';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { routes } from '../../routes/routes';
import { HeaderContainer, HomeIcon } from './styles';

export function Header() {
  const title = 'Home';

  return (
    <HeaderContainer>
      <HomeIcon to={routes.home} title={title}>
        <Home fontSize="large" />
      </HomeIcon>
      <ThemeSwitcher />
    </HeaderContainer>
  );
}
