import { prisma } from '../../config/Repository';

export const GetExperiencesByUserRepository = async (userId: string) => {
  try {
    const experiencesByUser = await prisma.experiences.findMany({
      where: { user_ID: userId },
    });

    return experiencesByUser;
  } catch (error) {}
};
