import { GetCertificateAreasRepository } from '../../repositories/CertificateAreas';
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
