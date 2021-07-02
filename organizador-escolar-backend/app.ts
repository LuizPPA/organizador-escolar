import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { db } from './lib/db';

import { rootRouter } from './routes/index';
import { userRouter } from './routes/user';
import { lessonRouter } from './routes/lesson';

const app = express();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/user', userRouter);
app.use('/lesson', lessonRouter);

export default app;
