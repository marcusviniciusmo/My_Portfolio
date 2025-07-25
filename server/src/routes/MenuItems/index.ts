import { route } from '../../config/Router';
import { GetMenuItemsByUserController } from '../../controllers/MenuItems';

export const GetMenuItemsByUserRoute = route.get(
  '/menuItems/:userId',
  GetMenuItemsByUserController,
);
