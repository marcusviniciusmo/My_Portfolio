import styled from 'styled-components';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { ResumeCardProps, WorkingSkillProps } from '../../@types/resume';

const shouldForwardProp = (props: string) =>
  !['borderColor', 'percentage'].includes(props);

export const ResumeContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Resume = styled.div`
  margin-block: 3rem 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2.4rem;
`;

export const ResumeEducationExperience = styled(Resume)``;

export const ResumeWorkingSkillsKnowledges = styled(Resume)`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  padding: 4.8rem 2.4rem;
  border-radius: 0.8rem;
`;

export const EducationExperienceContainer = styled.div`
  border-radius: 0.8rem;
  height: 50vh;
  overflow: auto;
`;

export const EducationContainer = styled(EducationExperienceContainer)``;

export const ExperienceContainer = styled(EducationExperienceContainer)``;

export const Title = styled.div`
  font-family: 'Poppins';
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .resumeIcon {
    color: var(--colorResumeIcon);
    width: 2.8rem;
    height: 2.8rem;
  }

  h4 {
    font-size: 2.6rem;
    font-weight: 500;
  }
`;

export const ResumeCard = styled.div.withConfig({
  shouldForwardProp,
})<ResumeCardProps>`
  background: ${props =>
    props.theme.name === ThemesNames.DARK ? 'transparent' : props.borderColor};
  border: ${({ theme }) =>
    theme.name === ThemesNames.DARK &&
    `2px solid ${theme.styles.secondaryBackground}`};
  font-family: 'Poppins';
  padding: 1.6rem 1.2rem 1.6rem 2rem;
  border-radius: 0.8rem;

  span {
    color: ${({ theme }) => theme.styles.secondaryColor};
    font-size: 1.4rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-block: 0.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const EducationCard = styled(ResumeCard)``;

export const ExperienceCard = styled(ResumeCard)``;

export const WorkingSkillContainer = styled.div.withConfig({
  shouldForwardProp,
})<WorkingSkillProps>`
  border-bottom: ${({ theme }) => `3px solid ${theme.styles.tertiaryColor}`};
  margin-bottom: 2.8rem;
  position: relative;

  &::after {
    content: '';
    background: var(--colorResumeIcon);
    width: ${props => props.percentage}%;
    height: 3px;
    position: absolute;
  }
`;

export const WorkingSkill = styled.div`
  padding: 0.4rem 2rem 0.4rem 0;
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme.styles.secondaryColor};
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const KnowledgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;
`;

export const Knowledge = styled.div`
  background: ${({ theme }) => theme.styles.primaryBackground};
  color: ${({ theme }) => theme.styles.secondaryColor};
  padding: 0.8rem 2rem;
  border-radius: 0.8rem;
`;
