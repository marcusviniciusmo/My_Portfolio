import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetMenuItemsByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const menuItemsByUser = await prisma.menuItems.findMany({
      where: { user_ID: userId },
    });

    return menuItemsByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
