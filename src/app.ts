import express from 'express'
import cors from 'cors'
import { CONFIG } from './config.js'
import { rutasAutenticacion } from './modulos/autenticacion/rutas.js'
import { rutasPersonas } from './modulos/personas/rutas.js'
import { autenticacionOpcional } from './utilidades/auth_middleware.js'
import { sembrarPersonas } from './infra/personas.js'

const app = express()

app.use(cors({ origin: CONFIG.origenesPermitidos }))
app.use(express.json({ limit: '2mb' }))

// Salud del servicio
app.get('/api/salud', (_req, res) => {
  res.json({ ok: true, servicio: 'TokTok API', version: '0.1.0' })
})

// Semilla de datos y auth opcional
sembrarPersonas()
app.use(autenticacionOpcional)

// Módulos
app.use('/api/autenticacion', rutasAutenticacion)
app.use('/api/personas', rutasPersonas)

export default app
