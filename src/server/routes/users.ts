import { Router } from 'express'
import { getUserById } from '../data/store.js'

export const usersRouter = Router()

usersRouter.get('/:id', (req, res) => {
  const user = getUserById(req.params.id)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})
