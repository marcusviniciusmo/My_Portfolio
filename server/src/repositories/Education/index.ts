import { prisma } from '../../config/Repository';

export const GetEducationByUserRepository = async (userId: string) => {
  try {
    const educationByUser = await prisma.education.findMany({
      where: { user_ID: userId },
    });

    return educationByUser;
  } catch (error) {}
};
