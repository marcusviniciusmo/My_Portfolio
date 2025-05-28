import styled from 'styled-components';

export const NotFoundContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Section = styled.section`
  background: ${({ theme }) => theme.styles.primaryBackground};
  padding: 4rem 0;

  h1 {
    font-size: 6rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.div`
  background: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')
    center;
  height: 40rem;
  border-radius: 0.8rem;
`;

export const Texts = styled.div`
  text-align: center;
  margin-top: 2rem;

  h3 {
    font-size: 4rem;
  }
`;

export const Link = styled.a`
  background: ${({ theme }) => theme.styles.secondaryColor};
  color: ${({ theme }) => theme.styles.primaryBackground};
  margin-block: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  display: inline-flex;
`;
