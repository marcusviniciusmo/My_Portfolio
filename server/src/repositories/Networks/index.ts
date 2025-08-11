import { prisma } from '../../config/Repository';

export const GetNetworksByUserRepository = async (userId: string) => {
  try {
    const networksByUser = await prisma.networks.findMany({
      where: { user_ID: userId },
    });

    return networksByUser;
  } catch (error) {}
};
