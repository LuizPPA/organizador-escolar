import { Router } from 'express';
export const rootRouter = Router();

rootRouter.get('/', (_req, res, next) => {
  res.send('Welcome to express');
});

