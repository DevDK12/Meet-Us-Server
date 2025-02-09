import {
    express, json, urlencoded, Request, Response, morgan, globalError, notFound, NextFunction, Session,
} from './index.js';

import dotenv from 'dotenv';
dotenv.config({ path: './.env' });






const app = express();




app.use(json());
app.use(urlencoded({ extended: true }));


app.use(morgan('dev'));







app.get('/', (_, res: Response) => {
    res.json({
        status: 'success',
        message: 'Server is up',
    })
});


app.get('/api/v1', (_, res: Response) => {
    res.json({
        status: 'success',
        message: 'API v1 working',
    })
});




app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.NODE_ENV === 'production' ? 'Production' : 'Development');
    next();
});



//******************** Routes *********************/


app.post("/api/v1/create-session", async (req, res, next) => {
    try {
        const sessionId = Math.random().toString(36).substr(2, 9);
        const session = new Session({ sessionId, participants: [] });
        await session.save();
        console.log(`Session ${sessionId} created`);
        res.json({ sessionId });
    } catch (error) {
        next(error);
    }
});

app.get("/api/v1/is-alive", async (req, res, next) => {
    try {
        const { sessionId } = req.query;
        const session = await Session.findOne({ sessionId });
        res.json({ isAlive: session });
    } catch (error) {
        next(error)
    }
});


//************************************************/







app.use('*', notFound);

app.use(globalError);

export default app;