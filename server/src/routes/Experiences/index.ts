import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetExperiencesByUserController,
  CreateExperiencesByUserController,
} from '../../controllers/Experiences';

export const GetExperiencesByUserRoute = route.get(
  '/experiences/:userId',
  GetExperiencesByUserController,
);

export const CreateExperiencesByUserRoute = route.post(
  '/experiences/:userId',
  AuthenticateJwt,
  CreateExperiencesByUserController,
);
