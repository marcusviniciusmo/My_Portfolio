import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetExpertisesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const expertisesByUser = await prisma.expertises.findMany({
      where: { user_ID: userId },
    });

    return expertisesByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
