import { GetMenuItemsByUserRepository } from '../../repositories/MenuItems';

export const GetMenuItemsByUserService = async (userId: string) => {
  try {
    const menuItemsByUser = await GetMenuItemsByUserRepository(userId);

    return menuItemsByUser;
  } catch (error) {}
};
