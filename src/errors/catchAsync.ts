import { NextFunction, Request, Response } from "express";

export type CatchAsyncController = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

const CatchAsync = <T extends Request, U extends Response, V extends NextFunction>(
    fn: (req: T, res: U, next: V) => Promise<unknown>) => async (req: T, res: U, next: V) => {

        return Promise.resolve(fn(req, res, next))
            .catch(error => next(error));

    }


// const CatchAsync = (fn: CatchAsyncController) => async (req: Request, res: Response, next: NextFunction) => {
//     return Promise.resolve(fn(req, res, next))
//     .catch(error => next(error));
// }







export default CatchAsync;
