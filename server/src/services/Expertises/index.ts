import { GetExpertisesByUserRepository } from '../../repositories/Expertises';

export const GetExpertisesByUserService = async (userId: string) => {
  try {
    const expertisesByUser = await GetExpertisesByUserRepository(userId);

    return expertisesByUser;
  } catch (error) {}
};
