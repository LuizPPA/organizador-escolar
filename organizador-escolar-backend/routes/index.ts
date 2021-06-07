import express from 'express';
export const rootRouter = express.Router();

rootRouter.get('/', (_req, res, next) => {
  res.send('Welcome to express');
});

