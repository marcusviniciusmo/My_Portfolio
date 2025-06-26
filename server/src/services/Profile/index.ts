import { GetProfileByIdRepository } from '../../repositories/Profile';

export const GetProfileByIdService = async (userId: string) => {
  try {
    const profileById = await GetProfileByIdRepository(userId);

    return profileById;
  } catch (error) {}
};
