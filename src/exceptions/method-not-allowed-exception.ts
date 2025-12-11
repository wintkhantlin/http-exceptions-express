import { HttpException } from "../core/http-exception";

class MethodNotAllowedException extends HttpException {
    constructor(message: string = "Method Not Allowed") {
        super(405, message);
    }
}

export { MethodNotAllowedException };
