import { Request, Response } from 'express';
import { GetIconsService } from '../../services/Icons';

export const GetIconsController = async (
  request: Request,
  response: Response,
) => {
  try {
    const icons = await GetIconsService();

    return response.status(200).json(icons);
  } catch (error) {}
};
