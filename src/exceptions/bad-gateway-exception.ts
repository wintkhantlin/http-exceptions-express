import { HttpException } from "../core/http-exception";

class BadGatewayException extends HttpException {
    constructor(message: string = "Bad Gateway") {
        super(502, message);
    }
}

export { BadGatewayException };
