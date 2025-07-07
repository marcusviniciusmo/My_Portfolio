import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetCertificatesByUserController,
  CreateCertificatesByUserController,
} from '../../controllers/Certificates';

export const GetCertificatesByUserRoute = route.get(
  '/certificates/:userId',
  GetCertificatesByUserController,
);

export const CreateCertificatesByUserRoute = route.post(
  '/certificates/:userId',
  AuthenticateJwt,
  CreateCertificatesByUserController,
);
