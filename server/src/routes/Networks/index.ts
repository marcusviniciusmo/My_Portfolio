import { route } from '../../config/Router';
import { GetNetworksByUserController } from '../../controllers/Networks';

export const GetNetworksByUserRoute = route.get(
  '/networks/:userId',
  GetNetworksByUserController,
);
