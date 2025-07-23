import { prisma } from '../../config/Repository';
import { ThrowRepositoryException } from '../../utils/Functions';

export const GetKnowledgesByUserRepository = async (
  route: string,
  userId: string,
) => {
  try {
    const knowledgesByUser = await prisma.knowledges.findMany({
      where: { user_ID: userId },
    });

    return knowledgesByUser;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
