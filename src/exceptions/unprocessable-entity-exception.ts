import { HttpException } from "../core/http-exception";

class UnprocessableEntityException extends HttpException {
    constructor(message: string = "Unprocessable Entity") {
        super(422, message);
    }
}

export { UnprocessableEntityException };
