import { GetProfileByIdRepository } from '../../repositories/Profile';
import { ThrowServiceException } from '../../utils/Functions';

export const GetProfileByIdService = async (route: string, userId: string) => {
  try {
    const profileById = await GetProfileByIdRepository(userId);

    return profileById;
  } catch (error) {
    ThrowServiceException(route, userId);
  }
};
