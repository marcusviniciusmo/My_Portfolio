import { Request, Response } from 'express';
import { GetEducationByUserService } from '../../services/Education';

export const GetEducationByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const educationByUser = await GetEducationByUserService(userId);

    return response.status(200).json(educationByUser);
  } catch (error) {}
};
