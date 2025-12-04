import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { PrismaClient } from "./generated/prisma/index.js"

const app = express()
app.use(express.json())
// CORS simple: preflight manejado automáticamente por el middleware
app.use(cors())

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

app.post('/api/videos/:id/like', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const video = await prisma.video.update({
      where: { id },
      data: { likes: { increment: 1 } },
      select: { id: true, likes: true }
    })
    res.json(video)
  } catch (e: any) {
    // P2025 es el código de Prisma cuando no existe el registro al actualizar
    if (e?.code === 'P2025') {
      return res.status(404).json({ error: 'Video no encontrado' })
    }
    res.status(400).json({ error: e?.message ?? 'Error añadiendo like' })
  }
})

// ---- Pets CRUD ----
app.get('/api/pets/:id', async (req, res) => {
  const id = String(req.params.id)
  // Interpretamos :id como userId para coherencia con requerimiento
  const byUser = await (prisma as any).pet.findUnique({ where: { userId: id } })
  if (!byUser) {
    // crear por defecto
    const created = await (prisma as any).pet.create({ data: { userId: id, size: 1.0, hearts: 1 } })
    return res.json({ userId: created.userId, size: created.size, hearts: created.hearts, lastFed: created.lastFed ?? null })
  }
  return res.json({ userId: byUser.userId, size: byUser.size, hearts: byUser.hearts, lastFed: byUser.lastFed ?? null })
})

app.post('/api/pets', async (req, res) => {
  const { size, hearts, userId } = req.body ?? {}
  if (!userId || typeof size !== 'number' || typeof hearts !== 'number') {
    return res.status(400).json({ error: 'userId, size (number), hearts (number) son requeridos' })
  }
  if (size <= 0) {
    return res.status(400).json({ error: 'size debe ser > 0' })
  }
  if (hearts < 0) {
    return res.status(400).json({ error: 'hearts debe ser >= 0' })
  }
  try {
    // Upsert por userId; si se actualiza, setear lastFed = now
    const existing = await (prisma as any).pet.findUnique({ where: { userId } })
    if (!existing) {
      const created = await (prisma as any).pet.create({ data: { userId, size, hearts, lastFed: new Date() } })
      return res.status(201).json({ userId: created.userId, size: created.size, hearts: created.hearts, lastFed: created.lastFed?.toISOString() })
    }
    const updated = await (prisma as any).pet.update({ where: { userId }, data: { size, hearts, lastFed: new Date() } })
    return res.json({ userId: updated.userId, size: updated.size, hearts: updated.hearts, lastFed: updated.lastFed?.toISOString() })
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? 'Error creando/actualizando mascota' })
  }
})

// ---- Intis endpoints ----
app.get('/api/intis/:userId', async (req, res) => {
  const userId = String(req.params.userId)
  try {
    const bal = await (prisma as any).intisBalance.findUnique({ where: { userId } })
    if (!bal) {
      const created = await (prisma as any).intisBalance.create({ data: { userId, balance: 0 } })
      return res.json({ userId, balance: created.balance, updatedAt: new Date(created.updatedAt).toISOString() })
    }
    return res.json({ userId, balance: bal.balance, updatedAt: new Date(bal.updatedAt).toISOString() })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Error obteniendo balance' })
  }
})

app.post('/api/intis/:userId/adjust', async (req, res) => {
  const userId = String(req.params.userId)
  const { amount, reason, operationId, clampToZero } = req.body ?? {}
  if (typeof amount !== 'number') return res.status(400).json({ error: 'amount (number) es requerido' })
  try {
    const clientAny = prisma as any
    // Idempotencia opcional por operationId
    if (operationId && typeof operationId === 'string') {
      const bucketKey = `intis:${userId}:${operationId}:${Math.floor(amount)}`
      const r = await clientAny.metricsReceipt.upsert({
        where: { userId_bucketKey: { userId, bucketKey } },
        update: {},
        create: { userId, bucketKey }
      })
      if (r.applied) {
        const bal = await clientAny.intisBalance.findUnique({ where: { userId } })
        const balance = bal?.balance ?? 0
        const updatedAt = bal ? new Date(bal.updatedAt).toISOString() : new Date().toISOString()
        return res.json({ userId, balance, updatedAt })
      }
    }

    const bal = await clientAny.intisBalance.upsert({ where: { userId }, update: {}, create: { userId, balance: 0 } })
    let tentative = bal.balance + Math.floor(amount)
    if (clampToZero) {
      if (tentative < 0) tentative = 0
    } else if (tentative < 0) {
      return res.status(400).json({ error: 'El ajuste produciría saldo negativo' })
    }

    const updated = await clientAny.intisBalance.update({ where: { userId }, data: { balance: tentative, updatedAt: new Date() } })
    await clientAny.intisLedger.create({ data: { userId, amount: Math.floor(amount), reason } })

    if (operationId && typeof operationId === 'string') {
      const bucketKey = `intis:${userId}:${operationId}:${Math.floor(amount)}`
      await clientAny.metricsReceipt.update({ where: { userId_bucketKey: { userId, bucketKey } }, data: { applied: true, appliedAt: new Date() } })
    }

    return res.json({ userId, balance: updated.balance, updatedAt: new Date(updated.updatedAt).toISOString() })
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? 'Error ajustando balance' })
  }
})

// ---- Autenticación ----
function normalizaRolInterno(input: string): 'visitante' | 'creador' | null {
  const v = String(input || '').toLowerCase()
  if (v === 'viewer' || v === 'visitante') return 'visitante'
  if (v === 'streamer' || v === 'creador') return 'creador'
  return null
}

function rolExterno(rolInterno: 'visitante' | 'creador'): 'viewer' | 'streamer' {
  return rolInterno === 'visitante' ? 'viewer' : 'streamer'
}

function emitirToken(persona: { id: string; nombre: string; rol: 'viewer' | 'streamer' }) {
  return jwt.sign({ sub: persona.id, nombre: persona.nombre, rol: persona.rol }, JWT_SECRET, { expiresIn: '7d' })
}

// Registro
for (const path of ['/api/autenticacion/registrar', '/autenticacion/registrar']) {
  app.post(path, async (req, res) => {
    try {
      const { usuario, correo, clave, rol } = req.body ?? {}
      const rolInterno = normalizaRolInterno(rol)
      if (!usuario || !rolInterno || !clave) {
        return res.status(400).json({ message: 'usuario, rol y clave son requeridos' })
      }
      const existente = await prisma.user.findUnique({ where: { nombre: usuario } })
      if (existente) return res.status(409).json({ message: 'usuario ya existe' })
      const hashed = await bcrypt.hash(clave, 10)
      const nuevo = await prisma.user.create({ data: { nombre: usuario, rol: rolInterno, password: hashed, contacto: correo } })
      const persona = { id: String(nuevo.id), nombre: nuevo.nombre, rol: rolExterno(nuevo.rol as 'visitante' | 'creador') }
      const token = emitirToken(persona)
      return res.status(200).json({ token, persona })
    } catch (e: any) {
      console.error('[Registro] Error:', e)
      const msg = e?.message || 'Error interno del servidor'
      return res.status(500).json({ message: msg })
    }
  })
}

// Login
for (const path of ['/api/autenticacion/ingresar', '/autenticacion/ingresar']) {
  app.post(path, async (req, res) => {
    try {
      const { usuario, clave } = req.body ?? {}
      if (!usuario || !clave) return res.status(400).json({ message: 'usuario y clave son requeridos' })
      const user = await prisma.user.findUnique({ where: { nombre: usuario } })
      if (!user) return res.status(401).json({ message: 'credenciales inválidas' })
      const ok = await bcrypt.compare(clave, user.password)
      if (!ok) return res.status(401).json({ message: 'credenciales inválidas' })
      const persona = { id: String(user.id), nombre: user.nombre, rol: rolExterno(user.rol as 'visitante' | 'creador') }
      const token = emitirToken(persona)
      return res.status(200).json({ token, persona })
    } catch (e: any) {
      console.error('[Login] Error:', e)
      const msg = e?.message || 'Error interno del servidor'
      return res.status(500).json({ message: msg })
    }
  })
}



// ---- Metrics (Streamer) ----
// Niveles: umbrales en ms para subir de nivel. Ajusta a tu criterio.
const LEVEL_THRESHOLDS_MS = [0, 1 * 60 * 60 * 1000, 5 * 60 * 60 * 1000, 12 * 60 * 60 * 1000, 24 * 60 * 60 * 1000, 72 * 60 * 60 * 1000, 200 * 60 * 60 * 1000]

function computeLevelFromMs(totalMs: number) {
  // devuelve el mayor nivel cuya threshold <= totalMs
  let level = 1
  for (let i = LEVEL_THRESHOLDS_MS.length - 1; i >= 0; i--) {
    const threshold = LEVEL_THRESHOLDS_MS[i] ?? 0
    if (totalMs >= threshold) {
      level = i + 1
      break
    }
  }
  // limitar entre 1 y LEVEL_THRESHOLDS_MS.length
  level = Math.max(1, Math.min(level, LEVEL_THRESHOLDS_MS.length))
  return level
}

// Calculadora unificada (60 minutos por nivel)
function computeUnifiedLevelAndProgress(totalMs: number) {
  const totalMinutes = Math.floor(totalMs / 60000)
  const level = Math.floor(totalMinutes / 60) + 1
  const progressPct = Math.floor(((totalMinutes % 60) / 60) * 100)
  return { level: Math.max(1, level), progressPct: Math.max(0, Math.min(100, progressPct)) }
}

// ---- Stream sessions, Audience levels, Gifts, Comments ----

// Crear nueva sesión de transmisión
app.post('/api/stream-session', async (req, res) => {
  const { userId, startTime } = req.body ?? {}
  if (!userId || !startTime) return res.status(400).json({ error: 'userId y startTime son requeridos' })
  try {
    const clientAny = prisma as any
    const session = await clientAny.streamSession.create({ data: { userId, startTime: new Date(startTime) } })
    res.status(201).json(session)
  } catch (e: any) {
    console.error('[StreamSession create] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error creando sesión' })
  }
})

// Obtener sesiones de un streamer
app.get('/api/stream-session/:userId', async (req, res) => {
  const userId = String(req.params.userId)
  try {
    const clientAny = prisma as any
    const sessions = await clientAny.streamSession.findMany({ where: { userId }, orderBy: { startTime: 'desc' } })
    res.json(sessions)
  } catch (e: any) {
    console.error('[StreamSession list] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error obteniendo sesiones' })
  }
})

// Configurar niveles de audiencia
app.post('/api/audience-level', async (req, res) => {
  const { userId, level, name, description, viewPermissions } = req.body ?? {}
  if (!userId || !level || !name) return res.status(400).json({ error: 'userId, level y name son requeridos' })
  try {
    const clientAny = prisma as any
    const al = await clientAny.audienceLevel.create({ data: { userId, level, name, description, viewPermissions } })
    res.status(201).json(al)
  } catch (e: any) {
    console.error('[AudienceLevel create] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error creando audience level' })
  }
})

app.get('/api/audience-level/:userId', async (req, res) => {
  const userId = String(req.params.userId)
  try {
    const clientAny = prisma as any
    const list = await clientAny.audienceLevel.findMany({ where: { userId }, orderBy: { level: 'asc' } })
    res.json(list)
  } catch (e: any) {
    console.error('[AudienceLevel list] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error obteniendo audience levels' })
  }
})

// Enviar regalo
app.post('/api/gift', async (req, res) => {
  const { receiverId, name, emoji, coins, senderId, message, streamSessionId, quantity } = req.body ?? {}
  if (!receiverId || !name || !emoji || typeof coins !== 'number') return res.status(400).json({ error: 'receiverId, name, emoji y coins son requeridos' })
  try {
    const clientAny = prisma as any
    const gift = await clientAny.gift.create({ data: { receiverId, name, emoji, coins, senderId, message, streamSessionId, quantity: quantity ?? 1 } })
    res.status(201).json(gift)
  } catch (e: any) {
    console.error('[Gift create] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error creando regalo' })
  }
})

app.get('/api/gift/received/:receiverId', async (req, res) => {
  const receiverId = String(req.params.receiverId)
  try {
    const clientAny = prisma as any
    const gifts = await clientAny.gift.findMany({ where: { receiverId }, orderBy: { createdAt: 'desc' } })
    res.json(gifts)
  } catch (e: any) {
    console.error('[Gift received] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error obteniendo regalos' })
  }
})

// Comentarios
app.post('/api/comment', async (req, res) => {
  const { userId, content } = req.body ?? {}
  if (!userId || !content) return res.status(400).json({ error: 'userId y content son requeridos' })
  try {
    const clientAny = prisma as any
    const comment = await clientAny.comment.create({ data: { userId, content } })
    res.status(201).json(comment)
  } catch (e: any) {
    console.error('[Comment create] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error creando comentario' })
  }
})

app.get('/api/comment', async (req, res) => {
  const limit = Number(req.query.limit) || 50
  try {
    const clientAny = prisma as any
    const comments = await clientAny.comment.findMany({ orderBy: { createdAt: 'desc' }, take: limit })
    res.json(comments)
  } catch (e: any) {
    console.error('[Comment list] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error obteniendo comentarios' })
  }
})

async function ensureMetricsRecord(userId: string) {
  // El cliente Prisma debe regenerarse para reconocer los nuevos modelos.
  // Para evitar errores de tipado antes de generar, se usa acceso dinámico.
  const clientAny = prisma as any
  let m = await clientAny.streamerMetrics.findUnique({ where: { userId } })
  if (!m) {
    m = await clientAny.streamerMetrics.create({ data: { userId } })
  }
  return m
}

// Obtener métricas
app.get('/api/metrics/:userId', async (req, res) => {
  const userId = String(req.params.userId)
  try {
    const clientAny = prisma as any
    // Métricas del streamer basadas en stream_sessions para garantizar consistencia
    const sessAgg = await clientAny.streamSession.aggregate({ where: { userId }, _sum: { durationMs: true }, _count: { id: true } } as any)
    const totalMs = (sessAgg._sum?.durationMs as number) ?? 0
    const totalSessions = (sessAgg._count?.id as number) ?? 0
    const { level, progressPct } = computeUnifiedLevelAndProgress(totalMs)

    // Persistir en user_metrics para referencia cruzada
    await clientAny.userMetrics.upsert({
      where: { userId },
      update: { totalMs, totalSessions, currentLevel: level, progressPct },
      create: { userId, totalMs, totalSessions, currentLevel: level, progressPct }
    })

    // Responder sólo los campos esperados por el front
    return res.json({ totalMs, totalSessions, currentLevel: level, progressPct })
  } catch (e: any) {
    console.error('[Metrics GET] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error obteniendo métricas' })
  }
})

// Finalizar sesión: actualizar totalMs y totalSessions (body: { durationMs: number })
app.post('/api/metrics/:userId/session-end', async (req, res) => {
  const userId = String(req.params.userId)
  const { durationMs } = req.body ?? {}
  if (typeof durationMs !== 'number' || durationMs < 0) return res.status(400).json({ error: 'durationMs (number >= 0) es requerido' })
  try {
    const clientAny = prisma as any
    // Idempotencia: bucket por ventanas de 5 minutos + duración
    const now = Date.now()
    const bucketWindowMs = 5 * 60 * 1000
    const minBucket = Math.floor(now / bucketWindowMs)
    const bucketKey = `${userId}:${minBucket}:${Math.floor(durationMs)}`

    // Upsert del recibo: si ya fue aplicado, devolver estado
    const receipt = await clientAny.metricsReceipt.upsert({
      where: { userId_bucketKey: { userId, bucketKey } },
      update: {},
      create: { userId, bucketKey },
    })

    if (receipt.applied) {
      const existing = await ensureMetricsRecord(userId)
      return res.json(existing)
    }

    // Cerrar última sesión abierta si existe (tolerante a retrasos)
    const openSession = await clientAny.streamSession.findFirst({
      where: { userId, endTime: null },
      orderBy: { startTime: 'desc' },
    })
    if (openSession) {
      const endTime = new Date()
      const computedDuration = typeof durationMs === 'number' && durationMs > 0
        ? Math.floor(durationMs)
        : Math.max(0, endTime.getTime() - new Date(openSession.startTime).getTime())
      await clientAny.streamSession.update({
        where: { id: openSession.id },
        data: { endTime, durationMs: computedDuration },
      })
    }

    // Actualizar métricas acumuladas de forma idempotente
    const current = await ensureMetricsRecord(userId)
    const newTotalMs = (current.totalMs ?? 0) + Math.floor(durationMs)
    const newTotalSessions = (current.totalSessions ?? 0) + 1
    const newLevel = computeLevelFromMs(newTotalMs)

    const dataToUpdate: any = { totalMs: newTotalMs, totalSessions: newTotalSessions }
    if (newLevel !== current.currentLevel) {
      dataToUpdate.currentLevel = newLevel
      dataToUpdate.lastLevelUpAt = new Date()
    }

    // Actualizar UserMetrics también (unificado)
    const um = await clientAny.userMetrics.upsert({
      where: { userId },
      update: {},
      create: { userId },
    })
    const umNewTotalMs = (um.totalMs ?? 0) + Math.floor(durationMs)
    const umNewTotalSessions = (um.totalSessions ?? 0) + 1
    const { level, progressPct } = computeUnifiedLevelAndProgress(umNewTotalMs)
    const umUpdate: any = { totalMs: umNewTotalMs, totalSessions: umNewTotalSessions, currentLevel: level, progressPct }
    if (level !== um.currentLevel) umUpdate.lastLevelUpAt = new Date()
    const updated = await clientAny.userMetrics.update({ where: { userId }, data: umUpdate })

    // Marcar recibo como aplicado
    await clientAny.metricsReceipt.update({ where: { userId_bucketKey: { userId, bucketKey } }, data: { applied: true, appliedAt: new Date() } })

    res.json(updated)
  } catch (e: any) {
    console.error('[Metrics session-end] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error actualizando métricas' })
  }
})

// Recalcular métricas desde StreamSession (agrega/ajusta durationMs en sesiones)
app.post('/api/metrics/:userId/recalculate', async (req, res) => {
  const userId = String(req.params.userId)
  try {
    // agrega suma y conteo desde StreamSession
    const agg = await (prisma as any).streamSession.aggregate({
      where: { userId },
      _sum: { durationMs: true },
      _count: { id: true }
    } as any)

    const totalMsAgg = (agg._sum?.durationMs as number) ?? 0
    const totalSessionsAgg = (agg._count?.id as number) ?? 0
    const newLevel = computeLevelFromMs(totalMsAgg)

    const m = await ensureMetricsRecord(userId)
    const dataToUpdate: any = { totalMs: totalMsAgg, totalSessions: totalSessionsAgg }
    if (newLevel !== m.currentLevel) {
      dataToUpdate.currentLevel = newLevel
      dataToUpdate.lastLevelUpAt = new Date()
    }

    const sessAgg = await (prisma as any).streamSession.aggregate({ where: { userId }, _sum: { durationMs: true }, _count: { id: true } } as any)
    const totalMsSess = (sessAgg._sum?.durationMs as number) ?? 0
    const totalSessionsSess = (sessAgg._count?.id as number) ?? 0
    const watchAgg = await (prisma as any).viewerWatchEvent.aggregate({ where: { userId }, _sum: { msWatched: true } } as any)
    const watchTotalMs = (watchAgg._sum?.msWatched as number) ?? 0
    const baseMs = watchTotalMs > 0 ? watchTotalMs : totalMsSess
    const { level, progressPct } = computeUnifiedLevelAndProgress(baseMs)
    const updated = await (prisma as any).userMetrics.upsert({
      where: { userId },
      update: { totalMs: totalMsSess, totalSessions: totalSessionsSess, watchTotalMs, currentLevel: level, progressPct },
      create: { userId, totalMs: totalMsSess, totalSessions: totalSessionsSess, watchTotalMs, currentLevel: level, progressPct },
    })
    res.json(updated)
  } catch (e: any) {
    console.error('[Metrics recalc] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error recalculando métricas' })
  }
})

// Incremento de watch para viewer
app.post('/api/viewer-watch/:userId/increment', async (req, res) => {
  const userId = String(req.params.userId)
  const { msWatched } = req.body ?? {}
  if (typeof msWatched !== 'number' || msWatched <= 0) return res.status(400).json({ error: 'msWatched (number > 0) es requerido' })
  try {
    const clientAny = prisma as any
    // Idempotencia por bucket 5m
    const now = Date.now()
    const bucketWindowMs = 5 * 60 * 1000
    const minBucket = Math.floor(now / bucketWindowMs)
    const bucketKey = `${userId}:watch:${minBucket}:${Math.floor(msWatched)}`
    const r = await clientAny.metricsReceipt.upsert({ where: { userId_bucketKey: { userId, bucketKey } }, update: {}, create: { userId, bucketKey } })
    if (r.applied) {
      const m = await clientAny.userMetrics.findUnique({ where: { userId } })
      return res.json(m ?? {})
    }
    await clientAny.viewerWatchEvent.create({ data: { userId, msWatched: Math.floor(msWatched) } })
    const um = await clientAny.userMetrics.upsert({ where: { userId }, update: {}, create: { userId } })
    const newWatch = (um.watchTotalMs ?? 0) + Math.floor(msWatched)
    const { level, progressPct } = computeUnifiedLevelAndProgress(newWatch)
    const updated = await clientAny.userMetrics.update({ where: { userId }, data: { watchTotalMs: newWatch, currentLevel: level, progressPct, lastLevelUpAt: level !== um.currentLevel ? new Date() : um.lastLevelUpAt } })
    await clientAny.metricsReceipt.update({ where: { userId_bucketKey: { userId, bucketKey } }, data: { applied: true, appliedAt: new Date() } })
    res.json(updated)
  } catch (e: any) {
    console.error('[Viewer watch increment] Error:', e)
    res.status(500).json({ error: e?.message ?? 'Error incrementando watch' })
  }
})

// ---- Start server ----
app.listen(PORT, () => {
  console.log(`[TokTok] API escuchando en http://localhost:${PORT}`)
})

process.on('SIGINT', async () => {
  console.log('\n[TOKTOK] Cerrando...')
  await prisma.$disconnect()
  process.exit(0)
})

// (El servidor se arranca al final del fichero, después de declarar todas las rutas)