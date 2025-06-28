import { Request, Response } from 'express';
import { GetCertificateAreasService } from '../../services/CertificateAreas';
import { ThrowControllerException } from '../../utils/Functions';

export const GetCertificateAreasController = async (
  request: Request,
  response: Response,
) => {
  const route = 'GetCertificateAreas';

  try {
    const certificateAreas = await GetCertificateAreasService(route);

    return response.status(200).json(certificateAreas);
  } catch (error) {
    ThrowControllerException(error, response, route);
  }
};
