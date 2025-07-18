import { Request, Response } from 'express';
import { GetExpertisesByUserService } from '../../services/Expertises';

export const GetExpertisesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const expertisesByUser = await GetExpertisesByUserService(userId);

    return response.status(200).json(expertisesByUser);
  } catch (error) {}
};
