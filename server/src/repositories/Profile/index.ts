import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetProfileByIdRepository = (route: string, userId: string) => {
  try {
    const profileById = prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {
    ThrowRepositoryException(route, userId);
  }
};
