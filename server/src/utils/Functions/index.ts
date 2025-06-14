import { Response } from 'express';
import * as Exception from '../../exceptions';

export function ThrowControllerException(
  error: any,
  response: Response,
  route: string,
  userId?: string,
) {
  let statusCode = 500;

  error = new Exception.Controller(route, { userId });

  console.log(error);

  return response.status(statusCode).json(error);
}
