import { GetCertificatesByUserRepository } from '../../repositories/Certificates';

export const GetCertificatesByUserService = async (userId: string) => {
  try {
    const certificatesByUser = await GetCertificatesByUserRepository(userId);

    return certificatesByUser;
  } catch (error) {}
};
