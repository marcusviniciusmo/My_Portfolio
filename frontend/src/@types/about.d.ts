import React from 'react';
import { SvgIconTypeMap } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CodeIcon from '@mui/icons-material/Code';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import StorageIcon from '@mui/icons-material/Storage';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export const icons: Record<string, React.ElementType> = {
  Translate: TranslateIcon,
  Code: CodeIcon,
  MobileFriendly: MobileFriendlyIcon,
  Storage: StorageIcon,
  ViewKanban: ViewKanbanIcon,
  ThumbUpAltOutlined: ThumbUpAltOutlinedIcon,
};

export const iconColors: Record<string, string> = {
  Translate: '#D565FF',
  Code: '#FE75D8',
  MobileFriendly: '#259FFF',
  Storage: '#E6B85B',
  ViewKanban: '#FF6080',
  ThumbUpAltOutlined: '#8774FF',
};

export interface ExpertiseType {
  id: string;
  title: string;
  text: string;
  color: string;
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
    muiName: string;
  };
}

export interface ExpertiseCardProps {
  color: string;
  borderColor: string;
}
