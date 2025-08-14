import { Request, Response } from 'express';
import {
  GetNetworksByUserService,
  CreateNetworksByUserService,
} from '../../services/Networks';
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

export const CreateNetworksByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'CreateNetworksByUser';

  try {
    const networksByUserInserted = await CreateNetworksByUserService(
      route,
      userId,
    );

    return response.status(201).json(networksByUserInserted);
  } catch (error) {}
};
