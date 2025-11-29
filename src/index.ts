import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from "./generated/prisma"

const app = express()
app.use(cors())
app.use(express.json())

if (!process.env.DATABASE_URL) {
  console.error('[Config] FALTA la variable de entorno DATABASE_URL')
  console.error('Define DATABASE_URL en .env o en el entorno del servicio (Render).')
}

const prisma = new PrismaClient()
const PORT = Number(process.env.PORT) || 3000

// Salud
app.get('/api/salud', (_req, res) => {
  res.json({ ok: true, servicio: 'TokTok API', version: '1.0.0' })
})

// ---- Users CRUD ----
app.get('/api/users', async (_req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id)
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
  res.json(user)
})

app.post('/api/users', async (req, res) => {
  const { name, email, password } = req.body ?? {}
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email y password son requeridos' })
  }
  try {
    const user = await prisma.user.create({ data: { name, email, password } })
    res.status(201).json(user)
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error creando usuario' })
  }
})

app.put('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { name, email, password } = req.body ?? {}
  try {
    const user = await prisma.user.update({ where: { id }, data: { name, email, password } })
    res.json(user)
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error actualizando usuario' })
  }
})

app.delete('/api/users/:id', async (req, res) => {
  const id = Number(req.params.id)
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

// ---- Server ----
app.listen(PORT, () => {
  console.log(`[TokTok] API escuchando en http://localhost:${PORT}`)
})

process.on('SIGINT', async () => {
  console.log('\n[TOKTOK] Cerrando...')
  await prisma.$disconnect()
  process.exit(0)
})
