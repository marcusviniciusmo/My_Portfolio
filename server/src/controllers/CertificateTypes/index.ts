import { Request, Response } from 'express';
import { GetCertificateTypesService } from '../../services/CertificateTypes';
import { ThrowControllerException } from '../../utils/Functions';

export const GetCertificateTypesController = async (
  request: Request,
  response: Response,
) => {
  const route = 'GetCertificateTypes';

  try {
    const certificateTypes = await GetCertificateTypesService(route);

    return response.status(200).json(certificateTypes);
  } catch (error) {
    ThrowControllerException(error, response, route);
  }
};
