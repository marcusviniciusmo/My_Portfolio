import { Request, Response } from 'express';
import * as Exception from '../../exceptions';

export function ThrowControllerException(
  error: any,
  response: Response,
  route: string,
  userId?: string,
) {
  let statusCode = 500;

  const isServiceException = error instanceof Exception.Service;
  const isRepositoryException = error instanceof Exception.Repository;
  const isNotFoundException = error instanceof Exception.NotFound;

  if (isNotFoundException) {
    statusCode = 404;
  } else if (!isServiceException && !isRepositoryException) {
    error = new Exception.Controller(route, { userId });
  }

  console.log(error);

  return response.status(statusCode).json(error);
}

export function ThrowServiceException(
  error: any,
  route: string,
  userId?: string,
) {
  const isRepositoryException = error instanceof Exception.Repository;
  const isNotFoundException = error instanceof Exception.NotFound;

  if (isRepositoryException || isNotFoundException) {
    throw error;
  } else {
    throw new Exception.Service(route, { userId });
  }
}

export function ThrowRepositoryException(route: string, userId?: string) {
  throw new Exception.Repository(route, { userId });
}

export function ThrowNotFoundException(route: string, userId?: string) {
  throw new Exception.NotFound(route, { userId });
}

export function ThrowAuthenticationException(error: any, response: Response) {
  const isInvalidTokenException = error instanceof Exception.InvalidToken;

  if (isInvalidTokenException) {
    throw error;
  } else {
    console.log(error);

    const route = 'Authentication';

    error = new Exception.AuthenticationFailed(route);

    return response.status(401).json(error);
  }
}

export function ThrowInvalidTokenException(
  request: Request,
  response: Response,
) {
  const route = 'Token';

  const error = new Exception.InvalidToken(route);

  return response.status(401).json(error);
}
