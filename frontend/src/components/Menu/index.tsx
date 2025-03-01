import {
  PermIdentity,
  Receipt,
  Devices,
  CardMembership,
  FormatQuote,
  AutoStories,
  Call,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { MenuContainer, List, Item } from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <List>
        <NavLink to={routes.about}>
          <Item>
            <PermIdentity fontSize="large" />
            About
          </Item>
        </NavLink>

        <NavLink to={routes.resume}>
          <Item>
            <Receipt fontSize="large" />
            Resume
          </Item>
        </NavLink>

        <NavLink to={routes.projects}>
          <Item>
            <Devices fontSize="large" />
            Projects
          </Item>
        </NavLink>

        <NavLink to={routes.certificates}>
          <Item>
            <CardMembership fontSize="large" />
            Certificates
          </Item>
        </NavLink>

        <NavLink to={routes.testimonials}>
          <Item>
            <FormatQuote fontSize="large" />
            Testimonials
          </Item>
        </NavLink>

        <NavLink to={routes.blogs}>
          <Item>
            <AutoStories fontSize="large" />
            Blogs
          </Item>
        </NavLink>

        <NavLink to={routes.contact}>
          <Item>
            <Call fontSize="large" />
            Contact
          </Item>
        </NavLink>
      </List>
    </MenuContainer>
  );
}
