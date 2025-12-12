import { HttpException } from "./http-exception";
import type { Request, Response, NextFunction } from 'express';

interface HttpExceptionMiddlewareOptions {
    useTimestamp?: boolean;
    logging?: (err: Error, req: Request) => void;
}

function httpExceptionMiddleware({ useTimestamp = false, logging }: HttpExceptionMiddlewareOptions = {}) {
    return (err: Error, req: Request, res: Response, _: NextFunction) => {
        if (logging) logging(err, req);

        if (err instanceof HttpException) {
            const response: Record<string, any> = { message: err.message };
            if (useTimestamp) response.timestamp = new Date().toISOString();
            res.status(err.status).json(response);
        } else {
            res.status(500).json({ message: "Internal Server Error" });
        }
    };
}

export { httpExceptionMiddleware };
