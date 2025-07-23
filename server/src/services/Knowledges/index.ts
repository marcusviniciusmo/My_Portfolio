import { GetKnowledgesByUserRepository } from '../../repositories/Knowledges';

export const GetKnowledgesByUserService = async (userId: string) => {
  try {
    const knowledgesByUser = await GetKnowledgesByUserRepository(userId);

    return knowledgesByUser;
  } catch (error) {}
};
