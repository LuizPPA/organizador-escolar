import { User } from '../models/user-model'
import bcrypt from 'bcryptjs';

export const userController = {
    async create(name: string, login: string, rawPassword: string){
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(rawPassword, salt);
        const user = new User({name, login, password});
        try {
            await user.save();
            return { id: user._id, name: user.name, login: user.login };
        }
        catch{
            throw 'Error creating user';
        }
    },

    async login(login: string, rawPassword: string){
        // search user in db
        const user = await User.findOne({login: login});
    
        // user == null
        if(!user){
            throw "User doesn't exist";
        }
    
        // password doesn't match with saved in db
        if(!bcrypt.compareSync(rawPassword, user.password)){
            throw "Password invalid!";
        }
    
        return user;
    },
}

