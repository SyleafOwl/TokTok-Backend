import { Router } from 'express'
import { getMetrics } from '../data/store.js'

export const metricsRouter = Router()

metricsRouter.get('/summary', (_req, res) => {
  res.json(getMetrics())
})
