import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.button.attrs({
  className: 'hoverDefault',
})`
  background: ${({ theme }) => theme.defaultStyles.baseBackground};
  color: ${({ theme }) => theme.contrastStyles.themeIconColor};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.3s ease-in-out,
    color 0.1s ease-in-out;
`;
