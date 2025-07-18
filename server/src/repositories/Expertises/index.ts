import { prisma } from '../../config/Repository';

export const GetExpertisesByUserRepository = async (userId: string) => {
  try {
    const expertisesByUser = await prisma.expertises.findMany({
      where: { user_ID: userId },
    });

    return expertisesByUser;
  } catch (error) {}
};
