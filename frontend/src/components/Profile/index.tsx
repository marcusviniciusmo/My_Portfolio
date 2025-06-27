import { useEffect, useState } from 'react';
import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileType, ProfileInitialState } from '../../@types/profile.d';
import { ProfileContainer, Image, Content, Name, Role } from './styles';

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>(ProfileInitialState);

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    fetch(`${baseUrlApi}/profile/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProfileContainer>
      <Image src={`${baseUrlApi}/${profile?.image}`} alt="Profile Photo" />
      <Content>
        <Name>{profile?.name}</Name>
        <Role>{profile?.role}</Role>
      </Content>

      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </ProfileContainer>
  );
}
