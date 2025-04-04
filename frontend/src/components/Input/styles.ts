import styled from 'styled-components';

export const InputContainer = styled.div.attrs({
  className: 'inputContainer'
})``;

export const Label = styled.label.attrs({
  className: 'inputLabel'
})``;

export const StyledInput = styled.input.attrs({
  className: 'styledInput'
})`
  &:focus-visible + ${Label}, &:valid + ${Label} {  
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
