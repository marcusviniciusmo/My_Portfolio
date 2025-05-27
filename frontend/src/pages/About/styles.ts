import styled from 'styled-components';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { ExpertiseCardProps } from '.';

const shouldForwardProp = (props: string) => 
  !['borderColor', 'color'].includes(props);

export const AboutContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Greetings = styled.h1`
  color: ${({ theme }) => theme.styles.primaryColor};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-block: 4rem;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.styles.secondaryColor};
  font-family: 'Poppins';
  font-size: 1.6rem;
  line-height: 2.8rem;

  p {
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
`;

export const ExpertiseContainer = styled.div`
  padding-block: 4.8rem;
`;

export const ExpertiseTitle = styled.h3`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ExpertiseCards = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.2rem;
`;

export const ExpertiseCard = styled.div.withConfig({
  shouldForwardProp,
})<ExpertiseCardProps>`
  background: ${props =>
    props.theme.name === ThemesNames.DARK
      ? 'transparent'
      : `${props.borderColor}`};
  border: ${({ theme }) =>
    theme.name === ThemesNames.DARK &&
    `2px solid ${theme.styles.secondaryBackground}`};
  padding: 2.4rem;
  border-radius: 1.2rem;
  display: flex;
  gap: 1.6rem;

  .resumeIcon {
    font-size: 4rem;
    color: ${props => props.color};
  }
`;

export const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CardTitle = styled.h3`
  font-family: 'Poppins';
  font-size: 2rem;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.styles.secondaryColor};
  line-height: 3.2rem;
`;
