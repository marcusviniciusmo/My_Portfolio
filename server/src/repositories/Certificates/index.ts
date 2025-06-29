import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetCertificatesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const certificatesByUser = await prisma.certificates.findMany({
      where: { user_ID: userId },
      include: {
        area_ID: true,
        type_ID: true,
      },
    });

    return certificatesByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
