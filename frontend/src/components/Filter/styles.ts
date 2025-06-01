import styled from 'styled-components';

export const FilterContainer = styled.div`
  border: ${({ theme }) => `1px solid ${theme.styles.tertiaryColor}`};
  width: 28.8rem;
  margin-top: 2rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const InputSearch = styled.input`
  background: transparent;
  border: 0;
  flex: 1;
  outline: none;
`;
