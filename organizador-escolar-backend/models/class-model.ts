import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
    name: { type: String, require: true},
    code: { type: String, require: true, index: true},
    syllabus: { type: String, require: false},
    professor: { type: String, require: true},
    time: [{ type: Date, require: true}],
    link: {
        type: [{ 
            type: String,
            require: true
        }], 
        validate: [arrayLimit, '{PATH} exceeds the limit of 10']}
});

export const User = mongoose.model('Class', classSchema);

// limit of 5 links per class
function arrayLimit(val: string | any[]) {
    return val.length <= 5;
  }