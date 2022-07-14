import { config } from '~/config';
import { NextFunction, Request, Response } from 'express'

/**
 *
 * @param err
 * @param req
 * @param res
 * @param next
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */

export const AuthHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){

        //split the space at the bearer
        const bearer = bearerHeader.split(' ');
        //Get token from string
        const bearerToken = bearer[1];

        //set the token
        if (bearerToken === config.API_TOKEN) {
            next();
            return true;
        }
        //next middleweare
    }
    //Fobidden
    res.sendStatus(403);
}
  