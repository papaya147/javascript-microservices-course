import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/CustomError'

export const errorhandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statuscode).send({ errors: err.serialiseErrors() })
    }

    res.status(400).send({
        errors: [
            { message: 'Something went wrong' }
        ]
    })
}