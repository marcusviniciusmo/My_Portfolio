import { GetCertificateTypesRepository } from '../../repositories/CertificateTypes';

export const GetCertificateTypesService = async () => {
  try {
    const certificateTypes = await GetCertificateTypesRepository();

    return certificateTypes;
  } catch (error) {}
};
