import { Request, Response } from 'express';
import {
  GetCertificateTypesService,
  CreateCertificateTypesService,
} from '../../services/CertificateTypes';
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

export const CreateCertificateTypesController = async (
  request: Request,
  response: Response,
) => {
  const route = 'CreateCertificateTypes';

  try {
    const certificateTypesInserted = await CreateCertificateTypesService(route);

    return response.status(201).json(certificateTypesInserted);
  } catch (error) {}
};
