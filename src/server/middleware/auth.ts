import type { Request, Response, NextFunction } from 'express'
import { getUserById, getUserIdFromToken } from '../data/store.js'

declare module 'express-serve-static-core' {
  interface Request {
    userId?: string
  }
}

export const optionalAuth = (req: Request, _res: Response, next: NextFunction) => {
  const header = req.headers['authorization']
  const token = header?.startsWith('Bearer ') ? header.substring(7) : undefined
  const userId = getUserIdFromToken(token)
  if (userId) req.userId = userId
  next()
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization']
  const token = header?.startsWith('Bearer ') ? header.substring(7) : undefined
  const userId = getUserIdFromToken(token)
  if (!userId) return res.status(401).json({ error: 'Unauthorized' })
  const user = getUserById(userId)
  if (!user) return res.status(401).json({ error: 'Unauthorized' })
  req.userId = userId
  next()
}
