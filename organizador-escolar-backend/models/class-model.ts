import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    name: { type: String, require: true},
    code: { type: String, require: true, index: true},
    syllabus: { type: String, require: false},
    professor: { type: String, require: true},
    time: [{ type: Date, require: true}],
    link: [{type: String, require: true}]
});

export const User = mongoose.model('Class', classSchema);