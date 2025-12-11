import { HttpException } from "../core/http-exception";

class InternalServerErrorException extends HttpException {
    constructor(message: string = "Internal Server Error") {
        super(500, message);
    }
}

export { InternalServerErrorException };
