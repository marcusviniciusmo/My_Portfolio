import {
  GetExpertisesByUserRepository,
  CreateExpertisesByUserRepository,
} from '../../repositories/Expertises';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetExpertisesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const expertisesByUser = await GetExpertisesByUserRepository(route, userId);

    if (expertisesByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return expertisesByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateExpertisesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const expertisesByUserInserted = await CreateExpertisesByUserRepository(
      route,
      userId,
    );

    return expertisesByUserInserted;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};
