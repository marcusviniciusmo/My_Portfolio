import { OverridableComponent } from '@mui/material/OverridableComponent';
import { NetworksNames } from '../enums/Networks';

export interface NetworksType {
  networkId: string;
  name: NetworksNames;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  title: string;
  link: {
    href: string;
    target: string;
    rel: string;
  };
}

export interface NetworksIconsColorsType {
  LINKEDIN: string;
  GITHUB: string;
  WHATSAPP: string;
  INSTAGRAM: string;
  EMAIL: string;
}

export interface NetworksIconsProps {
  networkIconName: NetworksNames;
}
