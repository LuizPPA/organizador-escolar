import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    name: { type: String, require: true },
    code: { type: String, require: true, index: true },
    syllabus: { type: String, require: false },
    professor: { type: String, require: true },
    schedules: {
        type: [{ 
            type: Date, 
            require: true
        }],
        validate: [arrayLimit, '{PATH} not exceeds the minimum of 1']},
    links: [{ type: String, require: true }]
});

export const Lesson = mongoose.model('Lesson', lessonSchema);

function arrayLimit(val: string | any[]) {
    return val.length >= 1;
}