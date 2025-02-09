import {
    express, json, urlencoded, Request, Response, morgan, globalError, notFound, NextFunction,
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





//************************************************/

app.use('*', notFound);

app.use(globalError);

export default app;