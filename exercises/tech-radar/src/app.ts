import express from 'express';

const app = express();

app.use(express.json());

app.use(
  '/ping',
  (req: express.Request, res: express.Response): express.Response =>
    res.json('pong'),
);

export { app };
