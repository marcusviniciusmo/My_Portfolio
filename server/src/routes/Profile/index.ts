import { route } from '../../config/Router';
import {
  GetProfileByIdController,
  CreateProfileController,
} from '../../controllers/Profile';

export const GetProfileByIdRoute = route.get(
  '/profile/:userId',
  GetProfileByIdController,
);

export const CreateProfileRoute = route.post(
  '/profile',
  CreateProfileController,
);
