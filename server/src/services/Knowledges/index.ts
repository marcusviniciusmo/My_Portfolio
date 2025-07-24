import {
  GetKnowledgesByUserRepository,
  CreateKnowledgesByUserRepository,
} from '../../repositories/Knowledges';
import {
  ThrowServiceException,
  ThrowNotFoundException,
} from '../../utils/Functions';

export const GetKnowledgesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const knowledgesByUser = await GetKnowledgesByUserRepository(route, userId);

    if (knowledgesByUser?.length === 0) {
      ThrowNotFoundException(route, userId);
    }

    return knowledgesByUser;
  } catch (error) {
    ThrowServiceException(error, route, userId);
  }
};

export const CreateKnowledgesByUserService = async (
  route: string,
  userId: string,
) => {
  try {
    const knowledgesByUserInserted = await CreateKnowledgesByUserRepository(
      route,
      userId,
    );

    return knowledgesByUserInserted;
  } catch (error) {}
};
