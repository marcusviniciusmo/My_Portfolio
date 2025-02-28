import {
  LinkedIn,
  GitHub,
  WhatsApp,
  Instagram,
  Email,
} from '@mui/icons-material';
import { NetworksType } from '../../@types/networks';
import { NetworksNames } from '../../enums/Networks';

export const NetworksData: NetworksType[] = [
  {
    networkId: '1',
    name: NetworksNames.LINKEDIN,
    icon: LinkedIn,
    title: 'Linkedin',
    link: {
      href: 'https://www.linkedin.com/in/marcus-viniciusmo/',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    networkId: '2',
    name: NetworksNames.GITHUB,
    icon: GitHub,
    title: 'GitHub',
    link: {
      href: 'https://github.com/marcusviniciusmo',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    networkId: '3',
    name: NetworksNames.WHATSAPP,
    icon: WhatsApp,
    title: 'WhatsApp',
    link: {
      href: 'https://wa.me/3530832084998',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    networkId: '4',
    name: NetworksNames.INSTAGRAM,
    icon: Instagram,
    title: 'Instagram',
    link: {
      href: 'https://www.instagram.com/projit.world/',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    networkId: '5',
    name: NetworksNames.EMAIL,
    icon: Email,
    title: 'Email',
    link: {
      href: 'mailto:marcus.viniciusmo@hotmail.com',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
];
