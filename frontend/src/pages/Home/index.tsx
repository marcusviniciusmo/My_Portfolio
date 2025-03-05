import { HomeContainer, Title, Subtitle, Avatar, Setup } from './styles';
import AvatarImage from '../../assets/home/avatar.jpg';
import SetupImage from '../../assets/home/setup.svg';

export function Home() {
  return (
    <HomeContainer>
      <Title>Front-End Developer & Lifelong Learner</Title>
      <Subtitle>
        I create user experiences through code and design, driven by a passion
        for continuous learning.
      </Subtitle>

      <Avatar src={AvatarImage} alt="Profile picture of the developer" />
      <Setup src={SetupImage} alt="Developer's workstation setup" />
    </HomeContainer>
  );
}
