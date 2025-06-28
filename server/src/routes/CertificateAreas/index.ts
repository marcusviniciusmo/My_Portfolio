import { route } from '../../config/Router';
import { GetCertificateAreasController } from '../../controllers/CertificateAreas';

export const GetCertificateAreasRoute = route.get(
  '/certificateAreas',
  GetCertificateAreasController,
);
