import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';

export function Profile() {
  return (
    <>
      <h1>PROFILE COMPONENT</h1>
      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </>
  );
}
