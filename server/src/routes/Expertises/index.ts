import { route } from '../../config/Router';
import { GetExpertisesByUserController } from '../../controllers/Expertises';

export const GetExpertisesByUserRoute = route.get(
  '/expertises/:userId',
  GetExpertisesByUserController,
);
