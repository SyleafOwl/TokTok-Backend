import { Router } from 'express'
import { ensureUser, issueToken } from '../data/store.js'
import { z } from 'zod'

export const authRouter = Router()

const loginSchema = z.object({
  username: z.string().min(3).max(32),
  role: z.union([z.literal('viewer'), z.literal('streamer')]).default('viewer')
})

authRouter.post('/login', (req, res) => {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid body', details: parsed.error.flatten() })
  const { username, role } = parsed.data
  const user = ensureUser(username, role)
  const token = issueToken(user.id)
  res.json({ token, user })
})
