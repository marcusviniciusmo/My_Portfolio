import { GetEducationByUserRepository } from '../../repositories/Education';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetEducationByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const educationByUser = await GetEducationByUserRepository(route, userId);

    if (educationByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return educationByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};
