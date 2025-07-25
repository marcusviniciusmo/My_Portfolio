import { useEffect, useState } from 'react';
import { SchoolOutlined, WorkOutline } from '@mui/icons-material';
import { TitlePage } from '../../components/TitlePage';
import {
  EducationType,
  ExperienceType,
  WorkingSkillType,
  KnowledgeType,
} from '../../@types/resume';
import {
  WorkingSkillsList,
  KnowledgesList,
  monthNames,
} from '../../data/Resume';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import * as Styles from './styles';

export function Resume() {
  const [educationList, setEducationList] = useState<EducationType[]>([]);
  const [educationIsLoading, setEducationIsLoading] = useState<boolean>(true);
  const [experiencesList, setExperiencesList] = useState<ExperienceType[]>([]);
  const [experiencesIsLoading, setExperiencesIsLoading] =
    useState<boolean>(true);
  const [workingSkillsList, setWorkingSkillsList] = useState<
    WorkingSkillType[]
  >([]);
  const [knowledgesList, setKnowledgesList] = useState<KnowledgeType[]>([]);
  const [knowledgesIsLoading, setKnowledgeIsLoading] = useState<boolean>(true);
  const [indexMapEducation, setIndexMapEducation] = useState<
    Map<string, number>
  >(new Map());
  const [indexMapExperience, setIndexMapExperience] = useState<
    Map<string, number>
  >(new Map());

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    setEducationIsLoading(true);

    fetch(`${baseUrlApi}/education/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setEducationList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      })
      .finally(() => {
        setEducationIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setExperiencesIsLoading(true);

    fetch(`${baseUrlApi}/experiences/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setExperiencesList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}.`);
      })
      .finally(() => {
        setExperiencesIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setWorkingSkillsList(WorkingSkillsList);
  }, []);

  useEffect(() => {
    setKnowledgeIsLoading(true);

    fetch(`${baseUrlApi}/knowledges/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setKnowledgesList(data);
      })
      .catch((error) => {
        console.log(`Erro: ${error}.`);
      })
      .finally(() => {
        setKnowledgeIsLoading(false);
      });
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
    const { periodStart, periodEnd } = education;

    return `${new Date(periodStart).getFullYear()} - ${new Date(periodEnd).getFullYear()}`;
  }

  function handleExperienceDate(experience: ExperienceType) {
    const periodStart = new Date(experience.periodStart);
    const periodEnd = new Date(experience.periodEnd);

    const isNow = (date: Date) => {
      const now = new Date();

      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
      );
    };

    const formatDate = (date: Date) => {
      return `${monthNames[date.getMonth()]}/${date.getFullYear()}`;
    };

    const startFormatted = formatDate(periodStart);
    const endFormatted = isNow(periodEnd) ? 'Now' : formatDate(periodEnd);

    return `${startFormatted} - ${endFormatted}`;
  }

  function getBorderColorEducation(itemId: string) {
    return setBorderColor(borderColors, indexMapEducation, itemId);
  }

  function getBorderColorExperience(itemId: string) {
    return setBorderColor(borderColors, indexMapExperience, itemId);
  }

  return (
    <Styles.ResumeContainer>
      <TitlePage title="Resume" />

      <Styles.ResumeEducationExperience>
        <Styles.EducationContainer>
          <Styles.Title>
            <SchoolOutlined className="resumeIcon" fontSize="large" />
            <h4>Education</h4>
          </Styles.Title>

          {educationIsLoading ? (
            <Styles.EducationCardSkeleton
              className={educationIsLoading ? 'skeleton' : ''}
            />
          ) : (
            <>
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
            </>
          )}
        </Styles.EducationContainer>

        <Styles.ExperienceContainer>
          <Styles.Title>
            <WorkOutline className="resumeIcon" fontSize="large" />
            <h4>Experience</h4>
          </Styles.Title>

          {experiencesIsLoading ? (
            <Styles.ExperienceCardSkeleton
              className={experiencesIsLoading ? 'skeleton' : ''}
            />
          ) : (
            <>
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
            </>
          )}
        </Styles.ExperienceContainer>
      </Styles.ResumeEducationExperience>

      <Styles.ResumeWorkingSkillsKnowledges>
        <div>
          <Styles.Title>
            <h4>Working Skills</h4>
          </Styles.Title>

          {workingSkillsList.map((workingSkill) => {
            return (
              <Styles.WorkingSkillContainer
                key={workingSkill.id}
                percentage={workingSkill.percentage}
              >
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

          {knowledgesIsLoading ? (
            <>
              <Styles.KnowledgesContainerSkeleton
                className={knowledgesIsLoading ? 'skeleton' : ''}
              />
            </>
          ) : (
            <Styles.KnowledgesContainer>
              {knowledgesList.map((knowledge) => {
                return (
                  <Styles.Knowledge key={knowledge.id}>
                    <div>{knowledge.description}</div>
                  </Styles.Knowledge>
                );
              })}
            </Styles.KnowledgesContainer>
          )}
        </div>
      </Styles.ResumeWorkingSkillsKnowledges>
    </Styles.ResumeContainer>
  );
}
