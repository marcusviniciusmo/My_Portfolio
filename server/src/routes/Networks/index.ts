import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetNetworksByUserController,
  CreateNetworksByUserController,
} from '../../controllers/Networks';

export const GetNetworksByUserRoute = route.get(
  '/networks/:userId',
  GetNetworksByUserController,
);

export const CreateNetworksByUserRoute = route.post(
  '/networks/:userId',
  AuthenticateJwt,
  CreateNetworksByUserController,
);
