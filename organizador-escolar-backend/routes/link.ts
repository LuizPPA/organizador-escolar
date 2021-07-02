import { Router } from 'express';
import { linkController } from '../controllers/link-controller';
export const linkRouter = Router();

/* PUT save link. */
linkRouter.put('/save', async (req, res, _next) => {
    const code = req.body['code'];

    try{
        const link = await linkController.save(code);
        res.status(201).send({
            type: 'OK',
            data: { link },
        });
    }
    catch(e){
        res.status(406).send(e);
    }
});