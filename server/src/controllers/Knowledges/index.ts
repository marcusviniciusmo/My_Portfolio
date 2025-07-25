import { Request, Response } from 'express';
import {
  GetKnowledgesByUserService,
  CreateKnowledgesByUserService,
} from '../../services/Knowledges';
import { ThrowControllerException } from '../../utils/Functions';

export const GetKnowledgesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetKnowledgesByUser';

  try {
    const knowledgesByUser = await GetKnowledgesByUserService(route, userId);

    return response.status(200).json(knowledgesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};

export const CreateKnowledgesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'CreateKnowledgesByUser';

  try {
    const knowledgesByUserInserted = await CreateKnowledgesByUserService(
      route,
      userId,
    );

    return response.status(201).json(knowledgesByUserInserted);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
