import { Request, Response } from 'express';
import { GetMenuItemsByUserService } from '../../services/MenuItems';

export const GetMenuItemsByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const menuItemsByUser = await GetMenuItemsByUserService(userId);

    return response.status(200).json(menuItemsByUser);
  } catch (error) {}
};
