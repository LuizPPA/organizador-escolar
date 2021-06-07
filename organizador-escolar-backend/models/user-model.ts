import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    login: { type: String, require: true, minLength: 6, unique: true, index: true },
    password: { type: String, require: true, minLength: 8 }
});

export const User = mongoose.model('User', userSchema);