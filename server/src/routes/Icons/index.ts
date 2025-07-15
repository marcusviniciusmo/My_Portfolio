import { route } from '../../config/Router';
import { GetIconsController } from '../../controllers/Icons';

export const GetIconsRoute = route.get(
  '/icons',
  GetIconsController
);
