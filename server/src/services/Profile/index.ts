import {
  GetProfileByIdRepository,
  CreateProfileRepository,
} from '../../repositories/Profile';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetProfileByIdService = async (route: string, userId: string) => {
  try {
    const profileById = await GetProfileByIdRepository(route, userId);

    if (!profileById) {
      ThrowNotFoundException(route, userId);
    }

    return profileById;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateProfileService = async (route: string) => {
  try {
    const profileInserted = await CreateProfileRepository(route);

    return profileInserted;
  } catch (error) {
    ThrowServiceException(error, route);
  }
};
