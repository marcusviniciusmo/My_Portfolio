import { Request, Response } from 'express';
import { GetCertificateAreasService } from '../../services/CertificateAreas';

export const GetCertificateAreasController = async (
  request: Request,
  response: Response,
) => {
  try {
    const certificateAreas = await GetCertificateAreasService();

    return response.status(200).json(certificateAreas);
  } catch (error) {}
};
