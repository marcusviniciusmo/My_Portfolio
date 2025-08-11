import { Request, Response } from 'express';
import { GetNetworksByUserService } from '../../services/Networks';

export const GetNetworksByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const networksByUser = await GetNetworksByUserService(userId);

    return response.status(200).json(networksByUser);
  } catch (error) {}
};
