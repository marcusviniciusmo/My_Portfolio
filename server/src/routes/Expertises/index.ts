import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetExpertisesByUserController,
  CreateExpertisesByUserController,
} from '../../controllers/Expertises';

export const GetExpertisesByUserRoute = route.get(
  '/expertises/:userId',
  GetExpertisesByUserController,
);

export const CreateExpertisesByUserRoute = route.post(
  '/expertises/:userId',
  AuthenticateJwt,
  CreateExpertisesByUserController,
);
