import { Request, Response } from 'express';
import { GetKnowledgesByUserService } from '../../services/Knowledges';
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
