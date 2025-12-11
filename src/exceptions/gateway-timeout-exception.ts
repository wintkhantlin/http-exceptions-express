import { HttpException } from "../core/http-exception";

class GatewayTimeoutException extends HttpException {
    constructor(message: string = "Gateway Timeout") {
        super(504, message);
    }
}

export { GatewayTimeoutException };
