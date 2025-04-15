import styled from 'styled-components';

export const TestimonialsContainer = styled.div.attrs({
  className: 'outletContainer',
})``;

export const Text = styled.h1`
  font-weight: normal;
  text-align: center;
  margin-block: 3rem;
`;

export const Content = styled.div`
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Testimonial = styled.div`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 65rem;
  height: 35rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-bottom: 2rem;
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.styles.secondaryColor};
  font-size: 1.6rem;
  font-weight: bold;
  text-align: justify;
  text-indent: 4rem;
  height: 15rem;
  margin-block: 2rem;
`;

export const Name = styled.h4`
  margin-bottom: 0.2rem;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.styles.tertiaryColor};
`;

export const Inputs = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Dot = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.styles.secondaryColor : theme.styles.secondaryBackground};
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  border: none;
  transition:
    background 0.3s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.styles.primaryColor};
    transform: scale(1.2);
  }
`;

export const ArrowButton = styled.button`
  color: ${({ theme }) => theme.styles.secondaryColor};
  background: transparent;
  border: none;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }

  .arrow {
    font-size: 3rem;
  }
`;
