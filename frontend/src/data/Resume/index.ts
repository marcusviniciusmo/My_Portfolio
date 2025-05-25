import {
  EducationType,
  ExperienceType,
  WorkingSkillType,
  KnowledgeType
} from '../../@types/resume';

export const EducationList: EducationType[] = [
  {
    id: '1',
    period: {
      start: new Date(2016, 0),
      end: new Date(2020, 0),
    },
    title: 'Information Systems',
    institution: 'Unifametro, Fortaleza, Brazil',
  },
];

export const ExperiencesList: ExperienceType[] = [
  {
    id: '1',
    period: {
      start: new Date(2025, 4),
      end: new Date(),
    },
    title: 'Care Staff - Day Services',
    institution: 'Stewarts Care',
  },
  {
    id: '2',
    period: {
      start: new Date(2023, 9),
      end: new Date(2025, 4),
    },
    title: 'Senior Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    id: '3',
    period: {
      start: new Date(2023, 1),
      end: new Date(2023, 10),
    },
    title: 'Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    id: '4',
    period: {
      start: new Date(2022, 3),
      end: new Date(2022, 8),
    },
    title: 'Healthcare Assistant',
    institution: 'All In Care',
  },
  {
    id: '5',
    period: {
      start: new Date(2020, 1),
      end: new Date(2021, 4),
    },
    title: 'Web Developer',
    institution: 'Farmacias Pague Menos',
  },
  {
    id: '6',
    period: {
      start: new Date(2019, 3),
      end: new Date(2020, 1),
    },
    title: 'Software Tester',
    institution: 'Farmacias Pague Menos',
  },
  {
    id: '7',
    period: {
      start: new Date(2014, 11),
      end: new Date(2018, 11),
    },
    title: 'Sub Manager',
    institution: 'Companhia do Saldo',
  },
  {
    id: '8',
    period: {
      start: new Date(2012, 5),
      end: new Date(2014, 11),
    },
    title: 'Seller',
    institution: 'Companhia do Saldo',
  },
];

export const WorkingSkillsList: WorkingSkillType[] = [
  {
    id: '1',
    description: 'Web Design',
    percentage: 90,
  },
  {
    id: '2',
    description: 'Mobile App',
    percentage: 70,
  },
  {
    id: '3',
    description: 'Figma',
    percentage: 75,
  },
  {
    id: '4',
    description: 'C# / SQL Server',
    percentage: 70,
  },
  {
    id: '5',
    description: 'Agile Method',
    percentage: 80,
  },
];

export const KnowledgesList: KnowledgeType[] = [
  {
    id: '1',
    description: 'React',
  },
  {
    id: '2',
    description: 'TypeScript',
  },
  {
    id: '3',
    description: 'CSS',
  },
  {
    id: '4',
    description: 'JavaScript',
  },
  {
    id: '5',
    description: 'HTML',
  },
  {
    id: '6',
    description: 'C#',
  },
  {
    id: '7',
    description: 'React Native',
  },
  {
    id: '8',
    description: 'SQL Server',
  },
  {
    id: '9',
    description: 'Scrum',
  },
  {
    id: '10',
    description: 'Kanban',
  },
  {
    id: '11',
    description: 'VS Code',
  },
  {
    id: '12',
    description: 'Visual Studio',
  },
  {
    id: '13',
    description: 'Android Studio',
  },
];

export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];