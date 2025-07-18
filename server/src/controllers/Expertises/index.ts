import { Request, Response } from 'express';
import { GetExpertisesByUserService } from '../../services/Expertises';
import { ThrowControllerException } from '../../utils/Functions';

export const GetExpertisesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetExpertisesByUser';

  try {
    const expertisesByUser = await GetExpertisesByUserService(route, userId);

    return response.status(200).json(expertisesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
