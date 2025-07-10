import { route } from '../../config/Router';
import { GetExperiencesByUserController } from '../../controllers/Experiences';

export const GetExperiencesByUserRoute = route.get(
  '/experiences/:userId',
  GetExperiencesByUserController,
);
