import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import { Menu } from '../../components/Menu';
import { LayoutContainer, View } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <View>
        <Profile />
        <div className="viewComponents">
          <Outlet />
        </div>
        <Menu />
      </View>
    </LayoutContainer>
  );
}
