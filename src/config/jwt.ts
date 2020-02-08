import jwt from 'jsonwebtoken';
import { SECRET } from '../util/secrets';
import { Request, Response } from 'express';
import { User } from '../models/user/user.model';

const jwtParsing = function (req: Request, res: Response, next: any) {
    try {
        const fullToken: string = req.headers.authorization.toString();

        const token = fullToken.split(" ")[1]
        jwt.verify(token, SECRET, function (err: any, payload: any) {
            if (payload) {
                User.findById(payload.userId).then(
                    (doc) => {
                        req.user = doc;
                        next()
                    }
                )
            } else {
                next()
            }
        })
    } catch (e) {
        next()
    }
}

export default jwtParsing;