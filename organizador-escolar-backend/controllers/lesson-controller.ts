import { Lesson } from "../models/lesson-model"

export const lessonController = {
    async create(name: string, code: string, syllabus: string, professor: string, schedules: Date[]){
        const lesson = new Lesson({name, code, syllabus, professor, schedules});
        
        try {
            await lesson.save();
            return {
                ...lesson,
                id: lesson._id,
            };
        }
        catch(e){
            throw e;
        }
    },

    async save(code: String) {
        try {
            // search lesson in db
            const lesson = await Lesson.findOne({ code: code });

            if (!lesson) {
                throw "Lesson doesn't exist";
            }

            lesson["links"] = `/lesson/${code}`;
            await lesson.save();

            return lesson;
        }
        catch (e) {
            throw e;
        }
    },
}