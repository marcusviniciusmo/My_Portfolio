import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetCertificateTypesRepository = async (route: string) => {
  try {
    const certificateTypes = await prisma.certificateTypes.findMany();

    return certificateTypes;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};
