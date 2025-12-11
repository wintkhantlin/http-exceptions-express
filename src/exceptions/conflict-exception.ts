import { HttpException } from "../core/http-exception";

class ConflictException extends HttpException {
    constructor(message: string = "Conflict") {
        super(409, message);
    }
}

export { ConflictException };
