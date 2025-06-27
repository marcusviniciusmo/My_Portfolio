import { Request, Response, NextFunction } from 'express';
import * as Exception from '../../exceptions';

export function RestrictWriteRoute(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const isInProductionEnviironment =
    process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION';
  const isPostMethod = request.method === 'POST';

  try {
    if (isInProductionEnviironment && isPostMethod) {
      throw Error;
    }

    next();
  } catch (error) {
    ThrowRestrictWriteRouteException(error, response);
  }
}

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

export function ThrowAuthenticationFailedException(
  error: any,
  response: Response,
) {
  const isInvalidTokenException = error instanceof Exception.InvalidToken;

  console.log(error);

  if (!isInvalidTokenException) {
    const route = 'AuthenticationFailed';

    error = new Exception.AuthenticationFailed(route);
  }

  return response.status(401).json(error);
}

export function ThrowInvalidTokenException() {
  const route = 'InvalidToken';

  throw new Exception.InvalidToken(route);
}

export function ThrowRestrictWriteRouteException(
  error: any,
  response: Response,
) {
  const route = 'RestrictWriteRoute';
  error = new Exception.RestrictWriteRoute(route);

  return response.status(403).json(error);
}
