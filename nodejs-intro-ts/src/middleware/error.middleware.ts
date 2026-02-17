import { Request, Response } from 'express';
import { CustomError } from '../domain/CustomError';

export const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({ error: message });
};
