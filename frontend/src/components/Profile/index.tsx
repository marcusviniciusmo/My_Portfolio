import { useEffect, useState } from 'react';
import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileType } from '../../@types/profile';
import { ProfileData } from '../../data/Profile';
import { ProfileContainer, Image, Content, Name, Role } from './styles';

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileType>();

  useEffect(() => {
    setProfileData(ProfileData);
  }, []);

  return (
    <ProfileContainer>
      <Image src={profileData?.image.url} alt={profileData?.image.alt} />
      <Content>
        <Name>{profileData?.name}</Name>
        <Role>{profileData?.role}</Role>
      </Content>

      <Networks />

      <ProfileInfo />

      <DownloadCV />
    </ProfileContainer>
  );
}
