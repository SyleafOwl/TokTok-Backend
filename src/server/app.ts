import express from 'express'
import cors from 'cors'
import { authRouter } from './routes/auth.js'
import { postsRouter } from './routes/posts.js'
import { giftsRouter } from './routes/gifts.js'
import { metricsRouter } from './routes/metrics.js'
import { liveRouter } from './routes/live.js'
import { usersRouter } from './routes/users.js'

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? '*' }))
app.use(express.json({ limit: '2mb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'TokTok API', version: '0.1.0' })
})

app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/gifts', giftsRouter)
app.use('/api/metrics', metricsRouter)
app.use('/api/live', liveRouter)
app.use('/api/users', usersRouter)

export default app
