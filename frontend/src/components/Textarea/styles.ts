import styled from 'styled-components';

export const TextareaContainer = styled.div.attrs({
  className: 'textareaContainer'
})``;

export const Label = styled.div.attrs({
  className: 'textareaLabel'
})``;

export const StyledTextarea = styled.textarea.attrs({
  className: 'styledTextarea'
})`
  &:focus-visible + ${Label}, &:valid + ${Label} {
    transform: translate(0.5rem, -3rem) scale(0.88);
    z-index: var(--max-z-index);
  }
`;
