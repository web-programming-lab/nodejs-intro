import { Router } from 'express';
import {
  errorFunctionality,
  getTechnology,
  getTechnologyById,
  postTechnology,
} from '../controller/technology.router';

const technologyRouter = Router();

technologyRouter.get('/', getTechnology);
technologyRouter.get('/error', errorFunctionality);
technologyRouter.get('/:id', getTechnologyById);
technologyRouter.post('/', postTechnology);

export { technologyRouter };
