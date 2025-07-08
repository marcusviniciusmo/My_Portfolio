import { GetEducationByUserRepository } from '../../repositories/Education';

export const GetEducationByUserService = async (userId: string) => {
  try {
    const educationByUser = await GetEducationByUserRepository(userId);

    return educationByUser;
  } catch (error) {}
};
