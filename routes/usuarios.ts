import {Router ,Request, Response} from 'express';

const userRoute = Router();

userRoute.get('/prueba',(req:Request,res:Response) => {
    res.json({
        estado:'success',
        mensaje:'ok'
    })
})

export default userRoute;