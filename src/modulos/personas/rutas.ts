import { Router } from 'express'
import { asegurarPersona, listarPersonas, obtenerPersonaPorId } from '../../infra/personas.js'
import { requerirAutenticacion } from '../../utilidades\auth_middleware.js'

export const rutasPersonas = Router()

// Listado con paginación
rutasPersonas.get('/', (req, res) => {
  const limite = Math.min(50, Math.max(1, Number(req.query.limite ?? 10)))
  const cursor = typeof req.query.cursor === 'string' ? req.query.cursor : undefined
  const pagina = listarPersonas(cursor, limite)
  res.json(pagina)
})

// Detalle por id
rutasPersonas.get('/:id', (req, res) => {
  const persona = obtenerPersonaPorId(req.params.id)
  if (!persona) return res.status(404).json({ error: 'No encontrado' })
  res.json(persona)
})

// Crear (requiere autenticación)
rutasPersonas.post('/', requerirAutenticacion, (req, res) => {
  const { nombre, rol } = req.body ?? {}
  if (typeof nombre !== 'string' || nombre.length < 3) return res.status(400).json({ error: 'Nombre inválido' })
  if (rol !== 'visitante' && rol !== 'creador') return res.status(400).json({ error: 'Rol inválido' })
  const p = asegurarPersona(nombre, rol)
  res.status(201).json(p)
})
