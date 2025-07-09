import { Request, Response } from 'express';
import {
  GetEducationByUserService,
  CreateEducationByUserService,
} from '../../services/Education';
import { ThrowControllerException } from '../../utils/Functions';

export const GetEducationByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetEducationByUser';

  try {
    const educationByUser = await GetEducationByUserService(route, userId);

    return response.status(200).json(educationByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};

export const CreateEducationByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'CreateEducationByUser';

  try {
    const educationByUserInserted = await CreateEducationByUserService(
      route,
      userId,
    );

    return response.status(201).json(educationByUserInserted);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
