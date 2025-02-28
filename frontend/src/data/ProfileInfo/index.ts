import {
  Smartphone,
  Email,
  LocationOn,
  CalendarMonth,
} from '@mui/icons-material';
import { ProfileInfoType } from '../../@types/profileInfo';

export const ProfileInfoData: ProfileInfoType[] = [
  {
    profileInfoId: '1',
    profileInfoIconName: 'SMARTPHONE',
    icon: Smartphone,
    label: 'Phone',
    data: '+353 083 208 4998',
    link: {
      href: 'https://wa.me/3530832084998',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    profileInfoId: '2',
    profileInfoIconName: 'EMAIL',
    icon: Email,
    label: 'Email',
    data: 'marcus.viniciusmo@hotmail.com',
    link: {
      href: 'mailto:marcus.viniciusmo@hotmail.com',
      target: '_blank',
      rel: 'noreferrer',
    },
  },
  {
    profileInfoId: '3',
    profileInfoIconName: 'LOCATION',
    icon: LocationOn,
    label: 'Location',
    data: 'Dublin, Ireland',
  },
  {
    profileInfoId: '4',
    profileInfoIconName: 'BIRTHDAY',
    icon: CalendarMonth,
    label: 'Birthday',
    data: 'December 28, 1984',
  },
];
