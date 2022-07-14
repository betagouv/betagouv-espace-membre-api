import { NextFunction, Request, Response } from 'express'

/**
 * Middleware global error
 *
 * @param err 
 * @param req
 * @param res
 * @param next
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export const ExceptionsHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  /**
   * Default error handler
   */
  if (res.headersSent) {
    return next(err)
  }

  /**
   * Our error
   */
  if (err.status && err.error) {
    return res
      .status(err.status)
      .json({ error: err.error })
  }

  return res
    .status(500)
    .json({ error: 'Erreur interne' })
}
