import styled from 'styled-components';
import { ThemesNames } from '../../enums/ThemeSwitcher';

export const HomeContainer = styled.div.attrs({
  className: 'outletContainer',
})`
  margin-top: 2rem;
  align-items: center;
  text-align: center;
  gap: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  word-wrap: break-word;
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
`;

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin-block: 5rem;
  box-shadow: var(--boxShadow);
`;

export const Setup = styled.img`
  width: 60rem;
  height: 30rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) =>
    theme.name === ThemesNames.DARK && 'var(--boxShadow)'};
`;
