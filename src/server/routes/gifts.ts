import { Router } from 'express'
import { gifts, sendGift } from '../data/store.js'
import { requireAuth } from '../middleware/auth.js'
import { z } from 'zod'

export const giftsRouter = Router()

giftsRouter.get('/', (_req, res) => {
  res.json({ items: gifts })
})

const sendSchema = z.object({ toUserId: z.string(), giftId: z.string() })
giftsRouter.post('/send', requireAuth, (req, res) => {
  const parsed = sendSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid body' })
  const ok = sendGift(req.userId as string, parsed.data.toUserId, parsed.data.giftId)
  if (!ok) return res.status(400).json({ error: 'Invalid gift or user' })
  res.json({ ok: true })
})
