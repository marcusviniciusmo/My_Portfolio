import { Request, Response } from 'express';
import {
  GetCertificateAreasService,
  CreateCertificateAreasService,
} from '../../services/CertificateAreas';
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

export const CreateCertificateAreasController = async (
  request: Request,
  response: Response,
) => {
  const route = 'CreateCertificateAreas';

  try {
    const certificateAreasInserted = await CreateCertificateAreasService(route);

    return response.status(201).json(certificateAreasInserted);
  } catch (error) {
    ThrowControllerException(error, response, route);
  }
};
