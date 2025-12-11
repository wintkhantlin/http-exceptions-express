import { HttpException } from "../core/http-exception";

class TooManyRequestsException extends HttpException {
    constructor(message: string = "Too Many Requests") {
        super(429, message);
    }
}

export { TooManyRequestsException };
