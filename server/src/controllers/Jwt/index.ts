import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY!;

export const GenerateJwtTokenController = (
  request: Request,
  response: Response,
) => {
  const payload = {};
  const token = jwt.sign(payload, secretKey);

  response.json({ token });
};
