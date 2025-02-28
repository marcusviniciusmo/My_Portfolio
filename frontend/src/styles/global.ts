import { createGlobalStyle } from 'styled-components';
import { setBackgroundToGradient } from '../utils/Functions';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gradientBackgroundFrom: #FA5252;
    --gradientBackgroundTo: #DD2476;
    font-size: 62.5%; /* 1rem = 10px */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-image: url(${({ theme }) => theme.backgroundImage});
    transition: background-image 0.5s ease-in-out;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  &:focus-visible {
    outline: 0;
  }

  &.hoverDefault {
    &:hover {
      ${setBackgroundToGradient()};
      color: ${({ theme }) => theme.defaultStyles.baseColor};
    }
  }
`;
