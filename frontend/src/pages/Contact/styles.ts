import styled from 'styled-components';

export const ContactContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Form = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Text = styled.h1`
  font-weight: normal;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Inputs = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const Submit = styled.button.attrs({
  className: 'hoverDefault',
})`
  background: ${({ theme }) => theme.styles.primaryBackground};
  color: ${({ theme }) => theme.styles.primaryColor};
  border: 2px solid ${({ theme }) => theme.styles.primaryBorder};
  font-weight: bold;
  width: 14.3rem;
  height: 5rem;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
`;
