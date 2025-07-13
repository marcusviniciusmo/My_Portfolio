import { Request, Response } from 'express';
import {
  GetExperiencesByUserService,
  CreateExperiencesByUserService,
} from '../../services/Experiences';
import { ThrowControllerException } from '../../utils/Functions';

export const GetExperiencesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetExperiencesByUser';

  try {
    const experiencesByUser = await GetExperiencesByUserService(route, userId);

    return response.status(200).json(experiencesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};

export const CreateExperiencesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'CreateExperiencesByUser';

  try {
    const experiencesByUserInserted = await CreateExperiencesByUserService(
      route,
      userId,
    );

    return response.status(201).json(experiencesByUserInserted);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
