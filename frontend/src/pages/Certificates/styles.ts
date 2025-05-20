import styled from 'styled-components';
import { CertificateProps } from '.';
import { ThemesNames } from '../../enums/ThemeSwitcher';

const shouldForwardProp = (prop: string) =>
  !['borderColor', 'isListInHover', 'isItemInHover'].includes(prop);

export const CertificatesContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Content = styled.div`
  margin-block: 3rem 2.4rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Title = styled.span`
  font-weight: bold;
  width: 100%;
  height: 8.5rem;
`;

export const Certificate = styled.div.withConfig({
  shouldForwardProp,
})<CertificateProps>`
  background: ${props =>
    props.theme.name === ThemesNames.DARK
      ? ' transparent'
      : `${props.borderColor}`};
  border: ${({ theme }) =>
    theme.name === ThemesNames.DARK &&
  `2px solid ${theme.styles.secondaryBackground}`};
  opacity: ${(props) => 
    props.isListInHover ? (props.isItemInHover ? 1 : 0.5) : 1};
  width: 20rem;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  border-radius: 0.8rem 0.8rem 0 0;
`;
