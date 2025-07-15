import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetIconsController,
  CreateIconsController,
} from '../../controllers/Icons';

export const GetIconsRoute = route.get(
  '/icons',
  GetIconsController
);

export const CreateIconsRoute = route.post(
  '/icons',
  AuthenticateJwt,
  CreateIconsController,
);
