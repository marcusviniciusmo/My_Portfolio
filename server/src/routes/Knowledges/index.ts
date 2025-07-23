import { route } from '../../config/Router';
import { GetKnowledgesByUserController } from '../../controllers/Knowledges';

export const GetKnowledgesByUserRoute = route.get(
  '/knowledges/:userId',
  GetKnowledgesByUserController,
);
