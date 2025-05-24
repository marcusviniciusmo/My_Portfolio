import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  background: ${({ theme }) => theme.styles.primaryBackground};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  opacity: 0.5;
  z-index: var(--max-z-index);
`;

export const Spinner = styled.div`
  border: ${({ theme }) => `8px solid ${theme.styles.primaryBorder}`};
  border-top: ${({ theme }) => `8px solid ${theme.styles.primaryColor}`};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  animation: ${Spin} 1s linear infinite;
`;
