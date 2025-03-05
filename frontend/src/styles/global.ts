import { createGlobalStyle } from 'styled-components';
import { setBackgroundToGradient } from '../utils/Functions';

export const GlobalStyle = createGlobalStyle`
  :root {
    --boxShadow:
      0 0 5px ${({ theme }) => theme.styles.primaryColor},
      0 0 5px ${({ theme }) => theme.styles.primaryColor};
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
    font-family: 'Roboto', sans-serif;
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

  &.viewComponents {
    background: ${({ theme }) => theme.styles.primaryBackground};
    height: 100%;
    margin-top: 17.6rem;
    border-radius: 2rem;
  }

  &.outletContainer {
    color: ${({ theme }) => theme.styles.primaryColor};
    width: 84rem;
    padding: 4.8rem 5.6rem;
    display: flex;
    flex-direction: column;
  }

  &.hoverDefault {
    &:hover {
      ${setBackgroundToGradient()};
      color: ${({ theme }) => theme.defaultStyles.baseColor};
    }
  }
`;
