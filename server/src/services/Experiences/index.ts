import { GetExperiencesByUserRepository } from '../../repositories/Experiences';

export const GetExperiencesByUserService = async (userId: string) => {
  try {
    const experiencesByUser = await GetExperiencesByUserRepository(userId);

    return experiencesByUser;
  } catch (error) {}
};
