import { ValidationError } from "express-validator"
import { CustomError } from "./CustomError"

export class RequestValidationError extends CustomError {
    statuscode = 400

    constructor(public errors: ValidationError[]) {
        super('Invalid username or password')
        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serialiseErrors() {
        return this.errors.map(error => {
            return { message: error.msg, field: error.param }
        })
    }
}