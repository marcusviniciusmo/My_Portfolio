import { useEffect, useState } from 'react';
import { SchoolOutlined, WorkOutline } from '@mui/icons-material';
import { TitlePage } from '../../components/TitlePage';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export interface ResumeCard {
  id: string;
  period: {
    start: Date;
    end: Date;
  };
  title: string;
  institution: string;
}

export interface EducationType extends ResumeCard { };

export interface ExperienceType extends ResumeCard { };

export interface WorkingSkillType {
  id: string;
  description: string;
  percentage: number;
};

export interface KnowledgeType {
  id: string;
  description: string;
};

export interface ResumeCardProps {
  borderColor: string;
}

export interface WorkingSkillProps {
  percentage: number;
}

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
      start: new Date(2025, 5),
      end: new Date(),
    },
    title: 'Care Staff - Day Services',
    institution: 'Stewarts Care',
  },
  {
    id: '2',
    period: {
      start: new Date(2023, 10),
      end: new Date(2025, 5),
    },
    title: 'Senior Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    id: '3',
    period: {
      start: new Date(2023, 2),
      end: new Date(2023, 11),
    },
    title: 'Healthcare Assistant',
    institution: 'TLC Carton',
  },
  {
    id: '4',
    period: {
      start: new Date(2022, 4),
      end: new Date(2022, 9),
    },
    title: 'Healthcare Assistant',
    institution: 'All In Care',
  },
  {
    id: '5',
    period: {
      start: new Date(2020, 2),
      end: new Date(2021, 5),
    },
    title: 'Web Developer',
    institution: 'Farmacias Pague Menos',
  },
  {
    id: '6',
    period: {
      start: new Date(2019, 4),
      end: new Date(2020, 2),
    },
    title: 'Software Tester',
    institution: 'Farmacias Pague Menos',
  },
  {
    id: '7',
    period: {
      start: new Date(2014, 12),
      end: new Date(2018, 12),
    },
    title: 'Sub Manager',
    institution: 'Companhia do Saldo',
  },
  {
    id: '8',
    period: {
      start: new Date(2012, 4),
      end: new Date(2014, 12),
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

export function Resume() {
  const [educationList, setEducationList] = useState<EducationType[]>([]);
  const [experiencesList, setExperiencesList] = useState<ExperienceType[]>([]);
  const [workingSkillsList, setWorkingSkillsList] = useState<WorkingSkillType[]>([]);
  const [knowledgesList, setKnowledgesList] = useState<KnowledgeType[]>([]);
  const [indexMapEducation, setIndexMapEducation] = useState<Map<string, number>>(new Map());
  const [indexMapExperience, setIndexMapExperience] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    setEducationList(EducationList);
  }, []);

  useEffect(() => {
    setExperiencesList(ExperiencesList);
  }, []);

  useEffect(() => {
    setWorkingSkillsList(WorkingSkillsList);
  }, []);

  useEffect(() => {
    setKnowledgesList(KnowledgesList);
  }, []);

  useEffect(() => {
    const map = getIndexMap(educationList);

    setIndexMapEducation(map);
  }, [educationList]);

  useEffect(() => {
    const map = getIndexMap(experiencesList);

    setIndexMapExperience(map);
  }, [experiencesList]);

  function handleEducationDate(education: EducationType) {
    const { start, end } = education.period;

    return `${start.getFullYear()} - ${end.getFullYear()}`;
  }

  function handleExperienceDate(experience: ExperienceType) {
    const { start, end } = experience.period;

    const isNow = (date: Date) => {
      const now = new Date();
      return (date.getFullYear() === now.getFullYear()) && (date.getMonth() === now.getMonth());
    };

    const formatDate = (date: Date) => {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

      return `${monthNames[date.getMonth()]}/${date.getFullYear()}`;
    };

    const startFormatted = formatDate(start);
    const endFormatted = isNow(end) ? 'Now' : formatDate(end);

    return `${startFormatted} - ${endFormatted}`;
  };

  function getBorderColorEducation(itemId: string) {
    return setBorderColor(borderColors, indexMapEducation, itemId);
  };

  function getBorderColorExperience(itemId: string) {
    return setBorderColor(borderColors, indexMapExperience, itemId);
  };

  return (
    <Styles.ResumeContainer>
      <TitlePage title="Resume" />

      <Styles.ResumeEducationExperience>
        <Styles.EducationContainer>
          <Styles.Title>
            <SchoolOutlined className="resumeIcon" fontSize="large" />
            <h4>Education</h4>
          </Styles.Title>

          {educationList.map((education) => {
            return (
              <Styles.EducationCard
                key={education.id}
                borderColor={getBorderColorEducation(education.id)}
              >
                <span>{handleEducationDate(education)}</span>
                <h3>{education.title}</h3>
                <p>{education.institution}</p>
              </Styles.EducationCard>
            );
          })}
        </Styles.EducationContainer>

        <Styles.ExperienceContainer>
          <Styles.Title>
            <WorkOutline className="resumeIcon" fontSize="large" />
            <h4>Experience</h4>
          </Styles.Title>

          {experiencesList.map((experience) => {
            return (
              <Styles.ExperienceCard
                key={experience.id}
                borderColor={getBorderColorExperience(experience.id)}
              >
                <span>{handleExperienceDate(experience)}</span>
                <h3>{experience.title}</h3>
                <p>{experience.institution}</p>
              </Styles.ExperienceCard>
            );
          })}
        </Styles.ExperienceContainer>
      </Styles.ResumeEducationExperience>

      <Styles.ResumeWorkingSkillsKnowledges>
        <div>
          <Styles.Title>
            <h4>Working Skills</h4>
          </Styles.Title>

          {workingSkillsList.map((workingSkill) => {
            return (
              <Styles.WorkingSkillContainer key={workingSkill.id} percentage={workingSkill.percentage}>
                <Styles.WorkingSkill>
                  <span>{workingSkill.description}</span>
                  <span>{`${workingSkill.percentage}%`}</span>
                </Styles.WorkingSkill>
              </Styles.WorkingSkillContainer>
            );
          })}
        </div>

        <div>
          <Styles.Title>
            <h4>Knowledges</h4>
          </Styles.Title>

          <Styles.KnowledgesContainer>
            {knowledgesList.map((knowledge) => {
              return (
                <Styles.Knowledge key={knowledge.id}>
                  <div>{knowledge.description}</div>
                </Styles.Knowledge>
              );
            })}
          </Styles.KnowledgesContainer>
        </div>
      </Styles.ResumeWorkingSkillsKnowledges>
    </Styles.ResumeContainer>
  );
}
