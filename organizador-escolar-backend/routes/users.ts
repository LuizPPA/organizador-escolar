import { Router } from 'express';
import { userController } from '../controllers/user-controller'
export const userRouter = Router();

/* POST create user. */
userRouter.post('/create', async (req, res, next) => {
    const name = req.body['name'];
    const login = req.body['login'];
    const password = req.body['password'];
    try{
        const user = await userController.create(name, login, password);
        res.status(201).send({
            type: 'OK',
            data: { user },
        });
    }
    catch(e){
        res.status(406).send(e);
    }
});

/* POST login user. */
userRouter.post('/login', async (req, res, next) => {
    const login = req.body['login'];
    const password = req.body['password'];
    try{
        const user = await userController.login(login, password);
        res.status(201).send({
            type: 'OK',
            data: { user },
        });
    }
    catch(e){
        res.status(406).send(e);
    }
});