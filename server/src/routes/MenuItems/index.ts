import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetMenuItemsByUserController,
  CreateMenuItemsByUserController,
} from '../../controllers/MenuItems';

export const GetMenuItemsByUserRoute = route.get(
  '/menuItems/:userId',
  GetMenuItemsByUserController,
);

export const CreateMenuItemsByUserRoute = route.post(
  '/menuItems/:userId',
  AuthenticateJwt,
  CreateMenuItemsByUserController,
);
