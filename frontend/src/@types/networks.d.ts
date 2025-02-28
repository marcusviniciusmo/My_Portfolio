import { NetworksNames } from '../enums/Networks';

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
