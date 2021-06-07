import { Router } from 'express';
import { User } from '../models/user-model'
export const userRouter = Router();

/* GET users listing. */
userRouter.post('/create', async (req, res, next) => {
  const user = new User({
    name: 'fulano',
    login: 'fulano',
    password: '12345678',
  })
  try{
    await user.save();
    res.send(user);
  }
  catch{
    res.status(406).send('Error creating user');
  }
});
