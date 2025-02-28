import styled from 'styled-components';
import { NetworksIconsProps } from '../../@types/networks';

export const NetworksContainer = styled.div`
  margin-inline: 1.2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.span
  .attrs({
    className: 'hoverDefault',
  })
  .withConfig({
    shouldForwardProp: (prop) => prop !== 'networkIconName',
  })<NetworksIconsProps>`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  color: ${({ theme, networkIconName }) => theme.networksIconsColors[networkIconName]};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;
