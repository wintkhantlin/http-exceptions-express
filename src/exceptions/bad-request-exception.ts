import { HttpException } from "../core/http-exception";

class BadRequestException extends HttpException {
    constructor(message: string = "Bad Request") {
        super(400, message);
    }
}

export { BadRequestException };