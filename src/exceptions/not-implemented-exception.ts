import { HttpException } from "../core/http-exception";

class NotImplementedException extends HttpException {
    constructor(message: string = "Not Implemented") {
        super(501, message);
    }
}

export { NotImplementedException };
