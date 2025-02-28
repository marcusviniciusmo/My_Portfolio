import { OverridableComponent } from '@mui/material/OverridableComponent';

type ProfileInfoIconType = 'SMARTPHONE' | 'EMAIL' | 'LOCATION' | 'BIRTHDAY';

export interface ProfileInfoType {
  profileInfoId: string;
  profileInfoIconName: ProfileInfoIconType;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  label: string;
  data: string;
  link?: {
    href: string;
    target: string;
    rel: string;
  };
}

export interface ProfileInfoIconProps {
  profileInfoIconName: ProfileInfoIconType;
}
