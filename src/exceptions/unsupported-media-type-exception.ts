import { HttpException } from "../core/http-exception";

class UnsupportedMediaTypeException extends HttpException {
    constructor(message: string = "Unsupported Media Type") {
        super(415, message);
    }
}

export { UnsupportedMediaTypeException };
