import { Request, Response } from 'express';
import { GetExperiencesByUserService } from '../../services/Experiences';

export const GetExperiencesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const experiencesByUser = await GetExperiencesByUserService(userId);

    return response.status(200).json(experiencesByUser);
  } catch (error) {}
};
