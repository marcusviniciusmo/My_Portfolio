import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuType } from '../../@types/menu';
import { MenuData } from '../../data/Menu';
import { MenuContainer, List, Item } from './styles';

export function Menu() {
  const [menuData, setMenuData] = useState<MenuType[]>([]);

  useEffect(() => {
    setMenuData(MenuData);
  });

  return (
    <MenuContainer>
      <List>
        {menuData.map((item) => {
          const IconElement = item.icon;

          return (
            <NavLink to={item.to} key={item.menuItemId}>
              <Item>
                <IconElement fontSize="large" />
                {item.label}
              </Item>
            </NavLink>
          );
        })}
      </List>
    </MenuContainer>
  );
}
