import express from 'express';
import { globalErrorHandler } from './middleware/error.middleware';
import { technologyController } from './features/technology/technology.controller';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/technologies', technologyController);
app.use(
  '/ping',
  (req: express.Request, res: express.Response): express.Response =>
    res.json('pong'),
);

app.use(globalErrorHandler);

export { app };
