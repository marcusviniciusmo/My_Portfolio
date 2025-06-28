import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetCertificateAreasRepository = async (route: string) => {
  try {
    const certificateAreas = await prisma.certificateAreas.findMany();

    return certificateAreas;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};
