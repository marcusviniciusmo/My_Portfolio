import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { Menu } from '../../components/Menu';

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Profile />
      <Menu />
      <Outlet />
    </div>
  );
}
