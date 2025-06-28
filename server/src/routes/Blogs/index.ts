import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetBlogsByUserController,
  CreateBlogsByUserController,
} from '../../controllers/Blogs';

export const GetBlogsByUserRoute = route.get(
  '/blogs/:userId',
  GetBlogsByUserController,
);

export const CreateBlogsByUserRoute = route.post(
  '/blogs/:userId',
  AuthenticateJwt,
  CreateBlogsByUserController,
);
