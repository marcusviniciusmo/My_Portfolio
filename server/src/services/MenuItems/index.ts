import {
  GetMenuItemsByUserRepository,
  CreateMenuItemsByUserRepository,
} from '../../repositories/MenuItems';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetMenuItemsByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const menuItemsByUser = await GetMenuItemsByUserRepository(route, userId);

    if (menuItemsByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return menuItemsByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateMenuItemsByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const menuItemsByUserInserted = await CreateMenuItemsByUserRepository(
      route,
      userId,
    );

    return menuItemsByUserInserted;
  } catch (error) {}
};
