import styled from 'styled-components';
import { ThemesNames } from '../../enums/ThemeSwitcher';

export const HomeContainer = styled.div`
  color: ${({ theme }) => theme.styles.primaryColor};
  margin-top: 2rem;
  padding: 4.8rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  word-wrap: break-word;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
`;

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  margin-block: 4rem;
  border-radius: 50%;
`;

export const Setup = styled.img`
  box-shadow: ${({ theme }) =>
    theme.name === ThemesNames.DARK && 'var(--boxShadow)'};
  width: 60rem;
  height: 30rem;
  border-radius: 2rem;
`;
