import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetCertificateTypesController,
  CreateCertificateTypesController,
} from '../../controllers/CertificateTypes';

export const GetCertificateTypesRoute = route.get(
  '/certificateTypes',
  GetCertificateTypesController,
);

export const CreateCertificateTypesRoute = route.post(
  '/certificateTypes',
  AuthenticateJwt,
  CreateCertificateTypesController,
);
