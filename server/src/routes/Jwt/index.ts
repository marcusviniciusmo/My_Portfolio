import { route } from '../../config/Router';
import { GenerateJwtTokenController } from '../../controllers/Jwt';

export const GenerateJwtTokenRoute = route.get(
  '/generateJwtToken',
  GenerateJwtTokenController,
);
