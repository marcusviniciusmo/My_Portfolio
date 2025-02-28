import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  margin-inline: 8rem;
  padding: 5rem 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeIcon = styled(NavLink).attrs({
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

  &:hover {
    filter: drop-shadow(
      0 0 10px ${({ theme }) => theme.defaultStyles.baseColor}
    );
  }
`;
