export interface ProfileType {
  userId: string;
  name: string;
  role: string;
  image: string;
  curriculum: string;
}

export const ProfileInitialState: ProfileType = {
  userId: '',
  name: '',
  role: '',
  image: '',
  curriculum: '',
};
