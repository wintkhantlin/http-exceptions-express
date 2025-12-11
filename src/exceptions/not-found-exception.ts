import { HttpException } from "../core/http-exception";

class NotFoundException extends HttpException {
    constructor(message: string = "Not Found") {
        super(404, message);
    }
}

export { NotFoundException };
