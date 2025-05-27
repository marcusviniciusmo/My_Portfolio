import {
  Translate,
  Code,
  MobileFriendly,
  Storage,
  ViewKanban,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { ExpertiseType } from '../../@types/about';

export const ExpertisesData: ExpertiseType[] = [
  {
    id: '1',
    title: 'Languages I speak',
    text: `React, React Native, TypeScript, JavaScript, HTML, CSS, C#, SQL
      Server, Git`,
    color: '#D565FF',
    icon: Translate,
  },
  {
    id: '2',
    title: 'Web Development',
    text: `Creating responsive and dynamic websites using the latest
      technologies.`,
    color: '#FE75D8',
    icon: Code,
  },
  {
    id: '3',
    title: 'App Development',
    text: `Developing intuitive and efficient mobile applications for Android
      and iOS.`,
    color: '#259FFF',
    icon: MobileFriendly,
  },
  {
    id: '4',
    title: 'Backend & Storage',
    text: `Implementing robust servers and secure, scalable storage solutions.`,
    color: '#E6B85B',
    icon: Storage,
  },
  {
    id: '5',
    title: 'Agile Methodologies',
    text: `Utilizing agile methodologies to ensure quick and high-quality
      deliveries.`,
    color: '#FF6080',
    icon: ViewKanban,
  },
  {
    id: '6',
    title: 'Good Practices',
    text: `Adopting good programming practices to ensure clean, efficient, and
      sustainable code.`,
    color: '#8774FF',
    icon: ThumbUpAltOutlined,
  },
];