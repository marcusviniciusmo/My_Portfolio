import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetNetworksByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const networksByUser = await prisma.networks.findMany({
      where: { user_ID: userId },
    });

    return networksByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
