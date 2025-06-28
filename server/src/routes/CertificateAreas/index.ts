import { route } from '../../config/Router';
import { AuthenticateJwt } from '../../middlewares/Jwt';
import {
  GetCertificateAreasController,
  CreateCertificateAreasController,
} from '../../controllers/CertificateAreas';

export const GetCertificateAreasRoute = route.get(
  '/certificateAreas',
  GetCertificateAreasController,
);

export const CreateCertificateAreasRoute = route.post(
  '/certificateAreas',
  AuthenticateJwt,
  CreateCertificateAreasController,
);
