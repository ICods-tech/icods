import AppError from '@shared/error/AppError';
import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenPayload {
  iat: number,
  exp: number,
  sub: string
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Missing JWT Token', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const verifyToken = verify(token, process.env.SECRET as string)
    const { sub } = verifyToken as TokenPayload

    req.user = {
      id: sub
    }

    return next()
  } catch (err) {
    throw new AppError('Invalid JWT token', 401)
  }
}
