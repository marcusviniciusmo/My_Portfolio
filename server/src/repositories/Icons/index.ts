import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetIconsRepository = async (route: string) => {
  try {
    const icons = await prisma.icons.findMany();

    return icons;
  } catch (error) {
    ThrowRepositoryException(error, route);
  }
};
