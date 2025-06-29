import {
  GetCertificateTypesRepository,
  CreateCertificateTypesRepository,
} from '../../repositories/CertificateTypes';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetCertificateTypesService = async (route: string) => {
  try {
    const certificateTypes = await GetCertificateTypesRepository(route);

    if (certificateTypes?.length === 0) {
      ThrowNotFoundException(route);
    }

    return certificateTypes;
  } catch (error) {
    ThrowServiceException(error, route);
  }
};

export const CreateCertificateTypesService = async (route: string) => {
  try {
    const certificateTypesInserted = await CreateCertificateTypesRepository(
      route,
    );

    return certificateTypesInserted;
  } catch (error) {}
};
