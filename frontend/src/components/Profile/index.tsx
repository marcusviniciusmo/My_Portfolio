import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileContainer } from './styles';
import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

export function Profile() {
  return (
    <ProfileContainer>
      <img src={ProfilePhoto} alt="Profile photo" />
      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </ProfileContainer>
  );
}
