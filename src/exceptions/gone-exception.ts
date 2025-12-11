import { HttpException } from "../core/http-exception";

class GoneException extends HttpException {
    constructor(message: string = "Gone") {
        super(410, message);
    }
}

export { GoneException };
