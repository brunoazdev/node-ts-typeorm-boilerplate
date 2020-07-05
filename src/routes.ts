import { Router } from 'express';

import UserController from './controller/UserController';
const userController = new UserController()

const routes = Router();

routes.get('/', userController.getUser);
routes.post('/user', userController.createUser);


export default routes;