import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileContainer, Image, Content, Name, Role } from './styles';
import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

export function Profile() {
  return (
    <ProfileContainer>
      <Image src={ProfilePhoto} alt="Profile photo" />
      <Content>
        <Name>Marcus Oliveira</Name>
        <Role>Web & Mobile Developer</Role>
      </Content>

      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </ProfileContainer>
  );
}
