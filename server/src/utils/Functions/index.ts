import { Response } from 'express';
import * as Exception from '../../exceptions';

export function ThrowControllerException(
  error: any,
  response: Response,
  route: string,
  userId?: string,
) {
  let statusCode = 500;

  const isServiceException = error instanceof Exception.Service;

  if (!isServiceException) {
    error = new Exception.Controller(route, { userId });
  }

  console.log(error);

  return response.status(statusCode).json(error);
}

export function ThrowServiceException(route: string, userId?: string) {
  throw new Exception.Service(route, { userId });
}
