import { prisma } from '../../config/Repository';

export const GetKnowledgesByUserRepository = async (userId: string) => {
  try {
    const knowledgesByUser = await prisma.knowledges.findMany({
      where: { user_ID: userId },
    });

    return knowledgesByUser;
  } catch (error) {}
};
