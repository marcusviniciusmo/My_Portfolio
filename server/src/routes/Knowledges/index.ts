import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetKnowledgesByUserController,
  CreateKnowledgesByUserController,
} from '../../controllers/Knowledges';

export const GetKnowledgesByUserRoute = route.get(
  '/knowledges/:userId',
  GetKnowledgesByUserController,
);

export const CreateKnowledgesByUserRoute = route.post(
  '/knowledges/:userId',
  AuthenticateJwt,
  CreateKnowledgesByUserController,
);
