import express from 'express';
import { globalErrorHandler } from './middleware/errorHandler';
import { technologyRouter } from './routes/technology.routes';
import { Db, MongoClient } from 'mongodb';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/technologies', technologyRouter);
app.use(
  '/ping',
  (req: express.Request, res: express.Response): express.Response =>
    res.json('pong'),
);

app.use(globalErrorHandler);

export { app };