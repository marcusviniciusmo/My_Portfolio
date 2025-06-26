import { GetProfileByIdRepository } from '../../repositories/Profile';
import { ThrowServiceException } from '../../utils/Functions';

export const GetProfileByIdService = async (route: string, userId: string) => {
  try {
    const profileById = await GetProfileByIdRepository(route, userId);

    return profileById;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};
