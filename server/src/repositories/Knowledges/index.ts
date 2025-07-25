import { prisma } from '../../config/Repository';
import { GetKnowledgesByUserToInsert } from '../../scripts/knowledges';
import {
  ThrowConflictException,
  ThrowRepositoryException,
} from '../../utils/Functions';

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

export const CreateKnowledgesByUserRepository = async (
  route: string,
  userId: string,
) => {
  const knowledgesByUserToInsert = GetKnowledgesByUserToInsert(userId);

  try {
    const existingKnowledgesByUser = await GetKnowledgesByUserRepository(
      route,
      userId,
    );

    const existingKnowledgesDescriptionByUser = new Set(
      existingKnowledgesByUser?.map(existingKnowledge =>
        existingKnowledge.description.toLowerCase().trim(),
      ),
    );

    const knowledgesToInsert = knowledgesByUserToInsert.filter(
      knowledgeToInsert =>
        !existingKnowledgesDescriptionByUser.has(
          knowledgeToInsert.description.toLowerCase().trim(),
        ),
    );

    if (knowledgesToInsert.length === 0) {
      ThrowConflictException(route, userId);
    }

    const knowledgesByUserInserted = await prisma.$transaction(async tx => {
      const inserted = [];

      for (const knowledge of knowledgesToInsert) {
        const knowledgeToInsert = await tx.knowledges.create({
          data: knowledge,
        });

        inserted.push(knowledgeToInsert);
      }

      return inserted;
    });

    return knowledgesByUserInserted;
  } catch (error) {
    ThrowRepositoryException(error, route, userId);
  }
};
