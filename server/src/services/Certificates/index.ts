import {
  GetCertificatesByUserRepository,
  CreateCertificatesByUserRepository,
} from '../../repositories/Certificates';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetCertificatesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const certificatesByUser = await GetCertificatesByUserRepository(
      route,
      userId,
    );

    if (certificatesByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return certificatesByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateCertificatesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const certificatesByUserInserted = await CreateCertificatesByUserRepository(
      route,
      userId,
    );

    return certificatesByUserInserted;
  } catch (error) {}
};
