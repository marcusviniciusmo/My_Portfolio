import { Request, Response } from 'express';
import { GetNetworksByUserService } from '../../services/Networks';
import { ThrowControllerException } from '../../utils/Functions';

export const GetNetworksByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetNetworksByUser';

  try {
    const networksByUser = await GetNetworksByUserService(route, userId);

    return response.status(200).json(networksByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
