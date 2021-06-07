import { User } from '../models/user-model'
import bcrypt from 'bcryptjs';

export const userController = {
    async create(name: string, login: string, rawPassword: string){
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(rawPassword, salt);
        const user = new User({name, login, password});
        try {
            await user.save();
            return { name: user.name, login: user.login };
        }
        catch{
            throw 'Error creating user';
        }
    },
}