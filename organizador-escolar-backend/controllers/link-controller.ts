import { Lesson } from "../models/lesson-model"

export const linkController = {
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