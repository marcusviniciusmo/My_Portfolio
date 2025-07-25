import { Request, Response } from 'express';
import { GetMenuItemsByUserService } from '../../services/MenuItems';
import { ThrowControllerException } from '../../utils/Functions';

export const GetMenuItemsByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetMenuItemsByUser';

  try {
    const menuItemsByUser = await GetMenuItemsByUserService(route, userId);

    return response.status(200).json(menuItemsByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
