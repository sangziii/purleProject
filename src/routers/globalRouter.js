import express from 'express';
import { getCartHome } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get('/cart', getCartHome);

export default globalRouter;
