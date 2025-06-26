import { Router } from 'express';
import { GetProfileByIdController } from '../../controllers/Profile';

const route = Router();

export const GetProfileByIdRoute = route.get(
  '/profile/:userId',
  GetProfileByIdController,
);
