import { Request, Response } from 'express';
import { GetCertificateTypesService } from '../../services/CertificateTypes';

export const GetCertificateTypesController = async (
  request: Request,
  response: Response,
) => {
  try {
    const certificateTypes = await GetCertificateTypesService();

    return response.status(200).json(certificateTypes);
  } catch (error) {}
};
