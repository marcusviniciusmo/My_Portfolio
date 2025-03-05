import styled from 'styled-components';
import { setBackgroundToGradient } from '../../utils/Functions';

export const Title = styled.h2`
  font-family: 'Roboto Slab';
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    ${setBackgroundToGradient()};
    width: 19.2rem;
    height: 0.2rem;
    margin-left: 2.5rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 50%;
  }
`;
