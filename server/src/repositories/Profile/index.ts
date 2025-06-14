import { prisma } from '../../config/Repository';

export const GetProfileByIdRepository = async (userId: string) => {
  try {
    const profileById = await prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {}
};
