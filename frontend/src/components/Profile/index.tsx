import { useEffect, useState } from 'react';
import { Networks } from '../Networks';
import { ProfileInfo } from '../ProfileInfo';
import { DownloadCV } from '../DownloadCV';
import { ProfileType, ProfileInitialState } from '../../@types/profile.d';
import * as Styles from './styles';

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>(ProfileInitialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    setIsLoading(true);

    fetch(`${baseUrlApi}/profile/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Styles.ProfileContainer>
      {isLoading ? (
        <Styles.ImageWrapper>
          <div className={isLoading ? 'skeleton' : ''} />
        </Styles.ImageWrapper>
      ) : (
        <Styles.Image
          src={`${baseUrlApi}/${profile?.image}`}
          alt="Profile Photo"
        />
      )}
      <Styles.Content>
        <Styles.Name className={isLoading ? 'skeleton' : ''}>
          {profile?.name}
        </Styles.Name>
        <Styles.Role className={isLoading ? 'skeleton' : ''}>
          {profile?.role}
        </Styles.Role>
      </Styles.Content>

      <Networks />

      <ProfileInfo />

      <DownloadCV
        name={profile.name}
        curriculum={profile.curriculum}
        isLoading={isLoading}
      />
    </Styles.ProfileContainer>
  );
}
