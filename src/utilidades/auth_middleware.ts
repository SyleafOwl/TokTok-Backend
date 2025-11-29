import type { Request, Response, NextFunction } from 'express'
import { obtenerPersonaIdDesdeToken, obtenerPersonaPorId } from '../infra/personas.js'

declare module 'express-serve-static-core' {
  interface Request { personaId?: string }
}

export const autenticacionOpcional = (req: Request, _res: Response, next: NextFunction) => {
  const cabecera = req.headers['authorization']
  const token = cabecera?.startsWith('Bearer ') ? cabecera.substring(7) : undefined
  const personaId = obtenerPersonaIdDesdeToken(token)
  if (personaId) req.personaId = personaId
  next()
}

export const requerirAutenticacion = (req: Request, res: Response, next: NextFunction) => {
  const cabecera = req.headers['authorization']
  const token = cabecera?.startsWith('Bearer ') ? cabecera.substring(7) : undefined
  const personaId = obtenerPersonaIdDesdeToken(token)
  if (!personaId) return res.status(401).json({ error: 'No autorizado' })
  const persona = obtenerPersonaPorId(personaId)
  if (!persona) return res.status(401).json({ error: 'No autorizado' })
  req.personaId = personaId
  next()
}
