import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetExperiencesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const experiencesByUser = await prisma.experiences.findMany({
      where: { user_ID: userId },
    });

    return experiencesByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
