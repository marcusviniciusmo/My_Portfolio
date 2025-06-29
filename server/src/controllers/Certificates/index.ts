import { Request, Response } from 'express';
import { GetCertificatesByUserService } from '../../services/Certificates';

export const GetCertificatesByUserController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params;

  try {
    const certificatesByUser = await GetCertificatesByUserService(userId);

    return response.status(200).json(certificatesByUser);
  } catch (error) {}
};
