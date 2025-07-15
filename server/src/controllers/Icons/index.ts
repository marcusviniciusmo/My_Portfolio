import { Request, Response } from 'express';
import { GetIconsService } from '../../services/Icons';
import { ThrowControllerException } from '../../utils/Functions';

export const GetIconsController = async (
  request: Request,
  response: Response,
) => {
  const route = 'GetIcons';

  try {
    const icons = await GetIconsService(route);

    return response.status(200).json(icons);
  } catch (error) {
    ThrowControllerException(error, response, route);
  }
};
