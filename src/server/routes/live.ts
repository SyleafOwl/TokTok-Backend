import { Router } from 'express'
import { getLiveStatus, setLiveStatus, getUserById } from '../data/store.js'
import { optionalAuth, requireAuth } from '../middleware/auth.js'

export const liveRouter = Router()

liveRouter.use(optionalAuth)

// Check a user's live status by username
liveRouter.get('/:username/status', (req, res) => {
  const live = getLiveStatus(req.params.username)
  res.json({ username: req.params.username, live })
})

// Only streamers can start/stop their live status
liveRouter.post('/start', requireAuth, (req, res) => {
  const user = getUserById(req.userId as string)
  if (!user || user.role !== 'streamer') return res.status(403).json({ error: 'Only streamers can go live' })
  setLiveStatus(user.username, true)
  res.json({ ok: true })
})

liveRouter.post('/stop', requireAuth, (req, res) => {
  const user = getUserById(req.userId as string)
  if (!user || user.role !== 'streamer') return res.status(403).json({ error: 'Only streamers can stop live' })
  setLiveStatus(user.username, false)
  res.json({ ok: true })
})
