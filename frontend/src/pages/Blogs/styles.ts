import styled from 'styled-components';
import { ThemesNames } from '../../enums/ThemeSwitcher';
import { BlogProps } from '.';

const shouldForwardProp = (prop: string) =>
  !['isListInHover', 'isItemInHover', 'borderColor'].includes(prop);

export const BlogsContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Content = styled.div`
  margin-block: 3rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.styles.secondaryColor};
  margin: 2rem 0 0;
`;

export const Blog = styled.div.withConfig({ shouldForwardProp })<BlogProps>`
  background: ${props =>
    props.theme.name === ThemesNames.DARK ? 'transparent' : props.borderColor};
  border: ${({ theme }) =>
    theme.name === ThemesNames.DARK &&
    `2px solid ${theme.styles.secondaryBackground}`};
  opacity: ${props =>
    props.isListInHover ? (props.isItemInHover ? 1 : 0.5) : 1};
  width: 32rem;
  margin: 2rem;
  padding: 2rem;
  border-radius: 0.8rem;

  &:hover {
    ${Name} {
      text-decoration: underline;
    }
  }
`;

export const Box = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 0.8rem;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 0.1);
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;
