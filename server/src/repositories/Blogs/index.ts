import { prisma } from '../../config/Repository';

export const GetBlogsByUserRepository = async (userId: string) => {
  try {
    const blogsByUser = await prisma.blogs.findMany({
      where: { user_ID: userId },
    });

    return blogsByUser;
  } catch (error) {}
};
