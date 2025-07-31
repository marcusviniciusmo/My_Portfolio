import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuType, icons } from '../../@types/menu.d';
import { MenuContainer, List, Item } from './styles';

export function Menu() {
  const [menuData, setMenuData] = useState<MenuType[]>([]);

  useEffect(() => {
    const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
    const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

    fetch(`${baseUrlApi}/menuItems/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      });
  });

  return (
    <MenuContainer>
      <List>
        {menuData.map((item) => {
          const IconComponent = icons[item.icon];

          return (
            <NavLink to={item.to} key={item.id}>
              <Item>
                {IconComponent && <IconComponent fontSize="large" />}
                {item.label}
              </Item>
            </NavLink>
          );
        })}
      </List>
    </MenuContainer>
  );
}
