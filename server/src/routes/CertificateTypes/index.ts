import { route } from '../../config/Router';
import { GetCertificateTypesController } from '../../controllers/CertificateTypes';

export const GetCertificateTypesRoute = route.get(
  '/certificateTypes',
  GetCertificateTypesController,
);
