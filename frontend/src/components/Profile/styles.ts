import styled from 'styled-components';

export const ProfileContainer = styled.aside.attrs({
  className: 'viewComponents',
})`
  text-align: center;
  width: 40rem;
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  box-shadow: ${({ theme }) => theme.styles.shadow};
  width: 24rem;
  height: 24rem;
  margin: -14rem auto 0;
  border-radius: 2rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const Content = styled.div`
  padding-block: 10rem 3.2rem;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.styles.primaryColor};
  font-size: 2.6rem;
  margin: 2.4rem auto 0.4rem;
`;

export const Role = styled.h3`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  color: ${({ theme }) => theme.styles.tertiaryColor};
  font-weight: 400;
  margin-bottom: 1.6rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  display: inline-block;
`;
