import { GetCertificateAreasRepository } from '../../repositories/CertificateAreas';

export const GetCertificateAreasService = async () => {
  try {
    const certificateAreas = await GetCertificateAreasRepository();

    return certificateAreas;
  } catch (error) {}
};
