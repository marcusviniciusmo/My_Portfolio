import { createGlobalStyle } from 'styled-components';
import { setBackgroundToGradient } from '../utils/Functions';

export const GlobalStyle = createGlobalStyle`
  :root {
    --boxShadow:
      0 0 5px ${({ theme }) => theme.styles.primaryColor},
      0 0 5px ${({ theme }) => theme.styles.primaryColor};
    --gradientBackgroundFrom: #FA5252;
    --gradientBackgroundTo: #DD2476;
    --max-z-index: 999;
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

  &.inputContainer, &.textareaContainer {
    background: ${({ theme }) => theme.styles.primaryBackground};
    flex: 1;
    position: relative;
  }

  &.inputLabel, &.textareaLabel {
    background: ${({ theme }) => theme.styles.primaryBackground};
    color: ${({ theme }) => theme.styles.secondaryColor};
    font-size: 1.6rem;
    margin: 0 2rem;
    padding: 0 1.5rem;
    position: absolute;
    top: 2rem;
    left: -1rem;
    user-select: none;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  &.styledInput, &.styledTextarea {
    color: ${({ theme }) => theme.styles.primaryColor};
    border: 2px solid ${({ theme }) => theme.styles.secondaryBackground};
    background: transparent;
    font-size: 1.6rem;
    line-height: 4rem;
    width: 100%;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    transition: all 0.3s ease-in-out;
    z-index: var(--max-z-index);

    &:focus-visible {
      border: 2px solid ${({ theme }) => theme.styles.primaryBorder};
    }
  }

  &.hoverDefault {
    &:hover {
      ${setBackgroundToGradient()};
      color: ${({ theme }) => theme.defaultStyles.baseColor};
    }
  }
`;
