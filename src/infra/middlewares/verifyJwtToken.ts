import AppError from '../error/AppError';
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  id: string,
  iat: number,
  exp: number
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization?.split(',')[0]

  if (!authHeader) {
    throw new AppError('Missing JWT Token', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const verifyToken = verify(token, process.env.SECRET as string)

    const { id } = verifyToken as TokenPayload

    req.user = {
      id
    }

    return next()
  } catch (err) {
    throw new AppError('Invalid JWT token', 401)
  }
}
