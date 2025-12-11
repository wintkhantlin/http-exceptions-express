import { HttpException } from "../core/http-exception";

class ForbiddenException extends HttpException {
    constructor(message: string = "Forbidden") {
        super(403, message);
    }
}

export { ForbiddenException };
