import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      decoded?: Object | any;
    }
  }
}
