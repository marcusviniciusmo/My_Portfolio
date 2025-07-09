import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetEducationByUserController,
  CreateEducationByUserController,
} from '../../controllers/Education';

export const GetEducationByUserRoutes = route.get(
  '/education/:userId',
  GetEducationByUserController,
);

export const CreateEducationByUserRoute = route.post(
  '/education/:userId',
  AuthenticateJwt,
  CreateEducationByUserController,
);
