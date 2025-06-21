import { route } from '../../config/Router';
import { GetBlogsByUserController } from '../../controllers/Blogs';

export const GetBlogsByUserRoute = route.get(
  '/blogs/:userId',
  GetBlogsByUserController,
);
