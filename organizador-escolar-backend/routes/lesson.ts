import { Router } from 'express';
import { lessonController } from '../controllers/lesson-controller';
export const lessonRouter = Router();

/* POST create user. */
lessonRouter.post('/create', async (req, res, _next) => {
    const name = req.body['name'];
    const code = req.body['code'];
    const syllabus = req.body['syllabus'];
    const professor = req.body['professor'];
    const schedules = req.body['schedules'].map((schedule: string | number) => new Date(schedule));

    try{
        const lesson = await lessonController.create(name, code, syllabus, professor, schedules);
        res.status(201).send({
            type: 'OK',
            data: { lesson },
        });
    }
    catch(e){
        res.status(406).send(e);
    }
});

/* PUT save link. */
lessonRouter.put('/save', async (req, res, _next) => {
    const code = req.body['code'];
    const link = req.body['link'];

    try{
        const data = await lessonController.saveLink(code, link);
        res.status(201).send({
            type: 'OK',
            data: { data },
        });
    }
    catch(e){
        res.status(406).send(e);
    }
});
