import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import { PrismaClient } from "./generated/prisma/index.js"

const app = express()
app.use(cors())
app.use(express.json())

if (!process.env.DATABASE_URL) {
  console.error('[Config] FALTA la variable de entorno DATABASE_URL')
  console.error('Define DATABASE_URL en .env o en el entorno del servicio (Render).')
}

const prisma = new PrismaClient()
const PORT = Number(process.env.PORT) || 3000
const JWT_SECRET = process.env.JWT_SECRET || 'toktok-dev-secret'

// Salud
app.get('/api/salud', (_req, res) => {
  res.json({ ok: true, servicio: 'TokTok API', version: '1.0.0' })
})

// ---- Users CRUD ----
app.get('/api/users', async (_req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, nombre: true, rol: true, contacto: true }
  })
  res.json(users)
})

app.get('/api/users/:id', async (req, res) => {
  const id = String(req.params.id)
  const user = await prisma.user.findUnique({ where: { id }, select: { id: true, nombre: true, rol: true, contacto: true } })
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
  res.json(user)
})

app.post('/api/users', async (req, res) => {
  const { nombre, rol, password, contacto } = req.body ?? {}
  if (!nombre || !rol || !password) {
    return res.status(400).json({ error: 'nombre, rol y password son requeridos' })
  }
  try {
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { nombre, rol, password: hashed, contacto } })
    res.status(201).json({ id: user.id, nombre: user.nombre, rol: user.rol, contacto: user.contacto ?? null })
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error creando usuario' })
  }
})

app.put('/api/users/:id', async (req, res) => {
  const id = String(req.params.id)
  const { nombre, rol, password, contacto } = req.body ?? {}
  try {
    const data: any = { nombre, rol, contacto }
    if (password) data.password = await bcrypt.hash(password, 10)
    const user = await prisma.user.update({ where: { id }, data, select: { id: true, nombre: true, rol: true, contacto: true } })
    res.json(user)
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error actualizando usuario' })
  }
})

app.delete('/api/users/:id', async (req, res) => {
  const id = String(req.params.id)
  try {
    await prisma.user.delete({ where: { id } })
    res.status(204).send()
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error eliminando usuario' })
  }
})

// ---- Videos CRUD ----
app.get('/api/videos', async (_req, res) => {
  const videos = await prisma.video.findMany({ include: { user: true } })
  res.json(videos)
})

app.get('/api/videos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const video = await prisma.video.findUnique({ where: { id }, include: { user: true } })
  if (!video) return res.status(404).json({ error: 'Video no encontrado' })
  res.json(video)
})

app.post('/api/videos', async (req, res) => {
  const { title, url, userId } = req.body ?? {}
  if (!title || !url || !userId) {
    return res.status(400).json({ error: 'title, url y userId son requeridos' })
  }
  try {
    const video = await prisma.video.create({ data: { title, url, userId } })
    res.status(201).json(video)
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error creando video' })
  }
})

app.put('/api/videos/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { title, url, likes, userId } = req.body ?? {}
  try {
    const video = await prisma.video.update({ where: { id }, data: { title, url, likes, userId } })
    res.json(video)
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error actualizando video' })
  }
})

app.delete('/api/videos/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await prisma.video.delete({ where: { id } })
    res.status(204).send()
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error eliminando video' })
  }
})

// ---- Autenticación ----
function normalizaRol(input: string): 'visitante' | 'creador' | null {
  const v = String(input || '').toLowerCase()
  if (v === 'visitante' || v === 'viewer') return 'visitante'
  if (v === 'creador' || v === 'streamer') return 'creador'
  return null
}

function emitirToken(persona: { id: string; nombre: string; rol: 'visitante' | 'creador' }) {
  return jwt.sign({ sub: persona.id, nombre: persona.nombre, rol: persona.rol }, JWT_SECRET, { expiresIn: '7d' })
}

// Registro
app.post('/api/autenticacion/registrar', async (req, res) => {
  const { nombre, rol, password, contacto } = req.body ?? {}
  const rolNorm = normalizaRol(rol)
  if (!nombre || !rolNorm || !password) {
    return res.status(400).json({ message: 'nombre, rol y password son requeridos' })
  }
  const existente = await prisma.user.findUnique({ where: { nombre } })
  if (existente) return res.status(409).json({ message: 'usuario ya existe' })
  const hashed = await bcrypt.hash(password, 10)
  const nuevo = await prisma.user.create({ data: { nombre, rol: rolNorm, password: hashed, contacto } })
  const persona = { id: String(nuevo.id), nombre: nuevo.nombre, rol: nuevo.rol as 'visitante' | 'creador' }
  const token = emitirToken(persona)
  return res.status(200).json({ token, persona })
})

// Login
app.post('/api/autenticacion/ingresar', async (req, res) => {
  const { nombre, password } = req.body ?? {}
  if (!nombre || !password) return res.status(400).json({ message: 'nombre y password son requeridos' })
  const user = await prisma.user.findUnique({ where: { nombre } })
  if (!user) return res.status(401).json({ message: 'credenciales inválidas' })
  const ok = await bcrypt.compare(password, user.password)
  if (!ok) return res.status(401).json({ message: 'credenciales inválidas' })
  const persona = { id: String(user.id), nombre: user.nombre, rol: user.rol as 'visitante' | 'creador' }
  const token = emitirToken(persona)
  return res.status(200).json({ token, persona })
})

// ---- Server ----
app.listen(PORT, () => {
  console.log(`[TokTok] API escuchando en http://localhost:${PORT}`)
})

process.on('SIGINT', async () => {
  console.log('\n[TOKTOK] Cerrando...')
  await prisma.$disconnect()
  process.exit(0)
})
