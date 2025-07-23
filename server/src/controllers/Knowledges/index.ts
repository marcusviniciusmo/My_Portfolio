import { Request, Response } from 'express';
import { GetKnowledgesByUserService } from '../../services/Knowledges';

export const GetKnowledgesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const knowledgesByUser = await GetKnowledgesByUserService(userId);

    return response.status(200).json(knowledgesByUser);
  } catch (error) {}
};
