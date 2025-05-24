import styled from 'styled-components';
import { ProjectsProps } from '.';
import { ThemesNames } from '../../enums/ThemeSwitcher';

const shouldForwardProp = (prop: string) =>
  !['borderColor', 'isListInHover', 'isItemInHover'].includes(prop);

export const ProjectsContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Content = styled.div`
  margin-block: 3rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Name = styled.h3`
  font-size: 1.6rem;
  margin: 2rem 0 0;
  overflow: hidden;
`;

export const Project = styled.div.withConfig({
  shouldForwardProp,
})<ProjectsProps>`
  background: ${props =>
    props.theme.name === ThemesNames.DARK ? 'transparent' : props.borderColor};
  border: ${({ theme }) =>
    theme.name === ThemesNames.DARK &&
    `2px solid ${theme.styles.secondaryBackground}`};
  opacity: ${props =>
    props.isListInHover ? (props.isItemInHover ? 1 : 0.5) : 1};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 32rem;
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    ${Name} {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0.1);

  img {
    width: 100%;
    height: 15rem;
    border-radius: 0.8rem;
  }

  &:hover {
    scale: 1.1;
  }
`;

export const Links = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export const Repository = styled.a`
  cursor: pointer;
`;

export const Url = styled.a`
  cursor: pointer;
`;
