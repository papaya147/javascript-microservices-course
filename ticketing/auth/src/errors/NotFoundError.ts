import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
    statuscode = 404

    constructor() {
        super('Page not found')
        Object.setPrototypeOf(this, NotFoundError.prototype)
    }

    serialiseErrors() {
        return [{ message: 'Not Found' }]
    }
}