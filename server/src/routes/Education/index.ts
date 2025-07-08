import { route } from '../../config/Router';
import { GetEducationByUserController } from '../../controllers/Education';

export const GetEducationByUserRoutes = route.get(
  '/education/:userId',
  GetEducationByUserController,
);
