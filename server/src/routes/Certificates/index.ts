import { route } from '../../config/Router';
import { GetCertificatesByUserController } from '../../controllers/Certificates';

export const GetCertificatesByUserRoute = route.get(
  '/certificates/:userId',
  GetCertificatesByUserController,
);
