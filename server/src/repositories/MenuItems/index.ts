import { prisma } from '../../config/Repository';

export const GetMenuItemsByUserRepository = async (userId: string) => {
  try {
    const menuItemsByUser = await prisma.menuItems.findMany({
      where: { user_ID: userId },
    });

    return menuItemsByUser;
  } catch (error) {}
};
