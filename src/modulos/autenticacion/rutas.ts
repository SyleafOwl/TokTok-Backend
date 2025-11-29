import { Router } from 'express'
import { asegurarPersona, emitirToken } from '../../infra/personas.js'

export const rutasAutenticacion = Router()

rutasAutenticacion.post('/ingresar', (req, res) => {
  const { nombre, rol } = req.body ?? {}
  if (typeof nombre !== 'string' || nombre.length < 3) return res.status(400).json({ error: 'Nombre inválido' })
  if (rol !== 'visitante' && rol !== 'creador') return res.status(400).json({ error: 'Rol inválido' })
  const persona = asegurarPersona(nombre, rol)
  const token = emitirToken(persona.id)
  res.json({ token, persona })
})
