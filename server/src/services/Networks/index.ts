import {
  GetNetworksByUserRepository,
  CreateNetworksByUserRepository,
} from '../../repositories/Networks';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetNetworksByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const networksByUser = await GetNetworksByUserRepository(route, userId);

    if (networksByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return networksByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateNetworksByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const networksByUserInserted = await CreateNetworksByUserRepository(
      route,
      userId,
    );

    return networksByUserInserted;
  } catch (error) {}
};
