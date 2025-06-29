import { Request, Response } from 'express';
import { GetCertificatesByUserService } from '../../services/Certificates';
import { ThrowControllerException } from '../../utils/Functions';

export const GetCertificatesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;
  const route = 'GetCertificatesByUser';

  try {
    const certificatesByUser = await GetCertificatesByUserService(
      route,
      userId,
    );

    return response.status(200).json(certificatesByUser);
  } catch (error) {
    ThrowControllerException(error, response, route, userId);
  }
};
