import { HttpException } from "./http-exception";
import type { Request, Response, NextFunction } from 'express';

interface HttpExceptionMiddlewareOptions {
    useTimestamp?: boolean;
}

function httpExceptionMiddleware({ useTimestamp = false }: HttpExceptionMiddlewareOptions = {}) {
    return (err: Error, _: Request, res: Response, next: NextFunction) => {
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
