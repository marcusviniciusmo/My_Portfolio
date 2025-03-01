import {
  PermIdentity,
  Receipt,
  Devices,
  CardMembership,
  FormatQuote,
  AutoStories,
  Call,
} from '@mui/icons-material';
import { routes } from '../../routes/routes';
import { MenuType } from '../../@types/menu';

export const MenuData: MenuType[] = [
  {
    menuItemId: '1',
    label: 'About',
    to: routes.about,
    icon: PermIdentity,
  },
  {
    menuItemId: '2',
    label: 'Resume',
    to: routes.resume,
    icon: Receipt,
  },
  {
    menuItemId: '3',
    label: 'Projects',
    to: routes.projects,
    icon: Devices,
  },
  {
    menuItemId: '4',
    label: 'Certificates',
    to: routes.certificates,
    icon: CardMembership,
  },
  {
    menuItemId: '5',
    label: 'Testimonials',
    to: routes.testimonials,
    icon: FormatQuote,
  },
  {
    menuItemId: '6',
    label: 'Blogs',
    to: routes.blogs,
    icon: AutoStories,
  },
  {
    menuItemId: '7',
    label: 'Contact',
    to: routes.contact,
    icon: Call,
  },
];
