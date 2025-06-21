import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetBlogsByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const blogsByUser = await prisma.blogs.findMany({
      where: { user_ID: userId },
    });

    return blogsByUser;
  } catch (error) {
    ThrowRepositoryException(route, userId);
  }
};
