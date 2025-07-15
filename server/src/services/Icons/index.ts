import { GetIconsRepository } from '../../repositories/Icons';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetIconsService = async (route: string) => {
  try {
    const icons = await GetIconsRepository(route);

    if (icons?.length === 0) {
      ThrowNotFoundException(route);
    }

    return icons;
  } catch (error) {
    ThrowServiceException(error, route);
  }
};
