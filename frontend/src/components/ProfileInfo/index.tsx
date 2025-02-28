import { useEffect, useState } from 'react';
import { ProfileInfoType } from '../../@types/profileInfo';
import { ProfileInfoData } from '../../data/ProfileInfo';
import {
  ProfileInfoContainer,
  Content,
  Icon,
  Info,
  Label,
  Data,
} from './styles';

export function ProfileInfo() {
  const [profileInfoData, setProfileInfoData] = useState<ProfileInfoType[]>([]);

  useEffect(() => {
    setProfileInfoData(ProfileInfoData);
  }, []);

  return (
    <ProfileInfoContainer>
      {profileInfoData.map((profileInfo) => {
        const IconElement = profileInfo.icon;

        return (
          <Content key={profileInfo.profileInfoId}>
            <Icon profileInfoIconName={profileInfo.profileInfoIconName}>
              <IconElement fontSize="large" />
            </Icon>
            <Info>
              <Label>{profileInfo.label}</Label>
              <Data>
                {profileInfo.link ? (
                  <a
                    href={profileInfo.link?.href}
                    target={profileInfo.link?.target}
                    rel={profileInfo.link?.rel}
                  >
                    {profileInfo.data}
                  </a>
                ) : (
                  <>{profileInfo.data}</>
                )}
              </Data>
            </Info>
          </Content>
        );
      })}
    </ProfileInfoContainer>
  );
}
