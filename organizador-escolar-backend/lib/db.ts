import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/organizador-escolar', {useNewUrlParser: true, useUnifiedTopology: true});

export const db = mongoose.connection;