import styled from 'styled-components';
import { ProfileInfoIconProps } from '../../@types/profileInfo';
import { ProfileInfoIconColors } from '../../enums/ProfileInfo';
import { setBackgroundToGradient } from '../../utils/Functions';

export const ProfileInfoContainer = styled.div`
  background: ${({ theme }) => theme.styles.primaryBackground};
  margin-top: 2.8rem;
  padding: 2.8rem;
  border-radius: 1.6rem;
`;

export const Icon = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'profileInfoIconName',
})<ProfileInfoIconProps>`
  background: ${({ theme }) => theme.styles.primaryBackground};
  color: ${({ profileInfoIconName }) =>
    ProfileInfoIconColors[profileInfoIconName]};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  width: 4rem;
  height: 4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: color 0.3s;
`;

export const Content = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;

  &:not(:first-child) {
    padding-top: 1rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.styles.primaryBorder};
  }

  &:hover {
    ${Icon} {
      ${setBackgroundToGradient()};
      color: ${({ theme }) => theme.defaultStyles.baseColor};
    }
  }
`;

export const Info = styled.div`
  text-align: left;
  margin-left: 1rem;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.styles.secondaryColor};
  font-size: 1.2rem;
`;

export const Data = styled.p`
  color: ${({ theme }) => theme.styles.primaryColor};
  word-break: break-all;

  a {
    color: ${({ theme }) => theme.styles.primaryColor};
    transition-duration: 0.1s;

    &:hover {
      color: var(--gradientBackgroundFrom);
    }
  }
`;
