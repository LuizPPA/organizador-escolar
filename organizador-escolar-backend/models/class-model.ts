import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    name: { type: String, require: true},
    code: { type: String, require: true, index: true},
    syllabus: { type: String, require: true},
    professor: { type: String, require: true},
    time: { type: String, require: true}
});

export const User = mongoose.model('Class', classSchema);