import styled from 'styled-components';
import { setBackgroundToGradient } from '../../utils/Functions';

export const DownloadCVContainer = styled.a`
  ${setBackgroundToGradient()};
  color: ${({ theme }) => theme.defaultStyles.baseColor};
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2.4rem auto;
  padding: 1.2rem 3.2rem;
  border-radius: 3.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  &:hover {
    ${setBackgroundToGradient('to left')};
  }
`;

export const File = styled.a`
  display: none;
`;
