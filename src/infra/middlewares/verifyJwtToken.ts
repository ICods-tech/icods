import AppError from '../error/AppError';
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  id: string,
  iat: number,
  exp: number
}
const {SECRET, BUSINESS_SECRET} = process.env

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization?.split(',')[0]

  if (!authHeader) {
    throw new AppError('Missing JWT Token', 401)
  }

  const [, token] = authHeader.split(' ')
  const isBusiness = req.path.includes('business')

  try {
    const verifyToken = verify(token, (isBusiness ? BUSINESS_SECRET : SECRET) as string)

    const { id } = verifyToken as TokenPayload

    if (isBusiness) req.business = {id}
    else req.user = {id}

    return next()
  } catch (err) {
    console.log(err);
    throw new AppError('Invalid JWT token', 401)
  }
}
