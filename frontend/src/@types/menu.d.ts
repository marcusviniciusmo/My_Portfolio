import { OverridableComponent } from '@mui/material/OverridableComponent';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DevicesIcon from '@mui/icons-material/Devices';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CallIcon from '@mui/icons-material/Call';

export const icons: Record<string, React.ElementType> = {
  PermIdentity: PermIdentityIcon,
  Receipt: ReceiptIcon,
  Devices: DevicesIcon,
  CardMembership: CardMembershipIcon,
  FormatQuote: FormatQuoteIcon,
  AutoStories: AutoStoriesIcon,
  Call: CallIcon,
};

export interface MenuType {
  id: string;
  label: string;
  to: string;
  icon: string;
}
