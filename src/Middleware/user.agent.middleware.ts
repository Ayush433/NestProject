import { NextFunction, Request, Response } from 'express';

export function userAgent(req: Request, res: Response, next: NextFunction) {
  const us = req.headers['user-agent'];
  console.log('us', us);

  req[us] = us;

  next();
}
