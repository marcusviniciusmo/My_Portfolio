import styled from 'styled-components';
import { setBackgroundGradient } from '../../utils/Functions';

export const ThemeSwitcherContainer = styled.button`
  color: ${({ theme }) => theme.oppositeColors.iconColor};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background: var(--backgroundWhite);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.3s ease,
    color 0.1s ease;

  &:hover {
    ${setBackgroundGradient()};
    color: var(--colorWhite);
  }
`;
