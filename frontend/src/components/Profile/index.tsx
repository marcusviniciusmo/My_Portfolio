import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

export function Profile() {
  return (
    <>
      <h1>PROFILE COMPONENT</h1>
      <img src={ProfilePhoto} alt="Profile photo" />
      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </>
  );
}
