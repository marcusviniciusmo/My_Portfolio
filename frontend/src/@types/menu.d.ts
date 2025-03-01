import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface MenuType {
  menuItemId: string;
  label: string;
  to: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
}
