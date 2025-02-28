import { ProfileType } from '../../@types/profile';
import ProfilePhoto from '../../assets/profile/profilePhoto.jpeg';

export const ProfileData: ProfileType = {
  profileId: '1',
  name: 'Marcus Oliveira',
  role: 'Web & Mobile Developer',
  image: {
    url: ProfilePhoto,
    alt: 'Marcus profile photo',
  },
};
