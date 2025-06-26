import { Request, Response } from 'express';
import { GetProfileByIdService } from '../../services/Profile';

export const GetProfileByIdController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const profileById = await GetProfileByIdService(userId);

    return response.status(200).json(profileById);
  } catch (error) {}
};
