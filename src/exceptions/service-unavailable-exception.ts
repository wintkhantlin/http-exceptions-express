import { HttpException } from "../core/http-exception";

class ServiceUnavailableException extends HttpException {
    constructor(message: string = "Service Unavailable") {
        super(503, message);
    }
}

export { ServiceUnavailableException };
