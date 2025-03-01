import styled from 'styled-components';

export const MenuContainer = styled.nav.attrs({
  className: 'viewComponents',
})`
  width: 14.5rem;
  margin-bottom: 4rem;
  padding: 3rem;
  display: block;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div.attrs({
  className: 'hoverDefault',
})`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  color: ${({ theme }) => theme.styles.secondaryColor};
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  height: 8rem;
  margin-block: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
