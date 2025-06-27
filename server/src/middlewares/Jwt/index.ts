import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {
  ThrowInvalidTokenException,
  ThrowAuthenticationFailedException,
} from '../../utils/Functions';

dotenv.config();

const secretKey = process.env.SECRET_KEY!;

export const AuthenticateJwt = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;

  try {
    if (!authHeader) {
      ThrowInvalidTokenException();
    }

    const token = authHeader!.split(' ')[1];

    const decoded = jwt.verify(token, secretKey);
    request.decoded = decoded;

    next();
  } catch (error) {
    ThrowAuthenticationFailedException(error, response);
  }
};
