import { route } from '../../config/Router';
import { GetProfileByIdController } from '../../controllers/Profile';

export const GetProfileByIdRoute = route.get(
  '/profile/:userId',
  GetProfileByIdController,
);
