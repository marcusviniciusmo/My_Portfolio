import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient({
  log: ['query'],
});

export const GetProfileByIdRepository = async (userId: string) => {
  try {
    const profileById = await prisma.profile.findUnique({
      where: { user_ID: userId },
    });

    return profileById;
  } catch (error) {}
};
