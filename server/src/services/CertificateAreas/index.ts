import {
  GetCertificateAreasRepository,
  CreateCertificateAreasRepository,
} from '../../repositories/CertificateAreas';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetCertificateAreasService = async (route: string) => {
  try {
    const certificateAreas = await GetCertificateAreasRepository(route);

    if (certificateAreas?.length === 0) {
      ThrowNotFoundException(route);
    }

    return certificateAreas;
  } catch (error) {
    ThrowServiceException(error, route);
  }
};

export const CreateCertificateAreasService = async (route: string) => {
  try {
    const certificateAreasInserted = await CreateCertificateAreasRepository(
      route,
    );

    return certificateAreasInserted;
  } catch (error) {}
};
