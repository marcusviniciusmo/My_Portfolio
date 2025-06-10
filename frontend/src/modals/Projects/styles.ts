import styled from 'styled-components';

export const ProjectsModalOverlay = styled.div.attrs({
  className: 'modalOverlay'
})``;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.styles.primaryBackground};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 100%;
  max-width: 50rem;
  min-height: 35rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ModalTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const ModalTitleIcon = styled.div`
  font-size: 2.8rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
`;

export const ModalDescription = styled.p`
  color: ${({ theme }) => theme.styles.secondaryColor};
  font-size: 1.4rem;
  text-align: justify;
  margin: 1rem;
`;

export const ModalCloseButton = styled.button`
  color: ${({ theme }) => theme.styles.primaryColor};
  font-size: 2rem;
  background: none;
  margin-left: 1rem;
  border: none;
  transition: 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const ModalContent = styled.div`
  color: ${({ theme }) => theme.styles.primaryColor};
  margin-top: 1.6rem;
  font-size: 1.4rem;
  line-height: 1.6;
  
  & .itemsContent {
    margin-top: 1.5rem;
    display: flex;
    gap: 2rem;
  }
`;

export const ModalContentItem = styled.div`
  color: ${({ theme }) => theme.styles.secondaryColor};
  margin-bottom: 0.8rem;
  transition: 0.2s ease-in-out;
  
  a {
    background: ${({ theme }) => theme.styles.secondaryBackground};
    color: ${({ theme }) => theme.styles.secondaryColor};
    width: 13rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: 0.3s ease-in-out;
    
    span {
      color: ${({ theme }) => theme.styles.primaryColor};
      font-weight: 500;
      transition: 0.3s ease-in-out;
    }

    &:hover {
      background: ${({ theme }) => theme.styles.secondaryColor};
      color: ${({ theme }) => theme.styles.secondaryBackground};
      
      span {
        color: ${({ theme }) => theme.styles.secondaryBackground};
      }
    }
  }
`;

export const ModalDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.styles.primaryBorder};
  margin: 1.6rem 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const ModalTechnologyContainer = styled.button`
  background: ${({ theme }) => theme.styles.secondaryBackground};
  color: ${({ theme }) => theme.styles.primaryColor};
  border: ${({ theme }) => `1px solid ${theme.styles.primaryBorder}`};
  padding: 0.5rem 1rem;
  border-radius: 0.8rem;
  transition: 0.3s ease-in-out;
  
  &:hover {
    background: ${({ theme }) => theme.styles.primaryColor};
    color: ${({ theme }) => theme.styles.primaryBackground};
  }
`;