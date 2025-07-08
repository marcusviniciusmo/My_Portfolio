import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetEducationByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const educationByUser = await prisma.education.findMany({
      where: { user_ID: userId },
    });

    return educationByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
