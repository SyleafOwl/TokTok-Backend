import { Router } from 'express'
import { addComment, createPost, getCommentsForPost, likePost, listPosts, seed, unlikePost } from '../data/store.js'
import { optionalAuth, requireAuth } from '../middleware/auth.js'
import { z } from 'zod'

seed()

export const postsRouter = Router()

postsRouter.use(optionalAuth)

postsRouter.get('/', (req, res) => {
  const limit = Math.min(50, Math.max(1, Number(req.query.limit ?? 10)))
  const cursor = typeof req.query.cursor === 'string' ? req.query.cursor : undefined
  const page = listPosts(cursor, limit)
  res.json(page)
})

const createSchema = z.object({ title: z.string().min(1).max(140), mediaUrl: z.string().url().optional() })
postsRouter.post('/', requireAuth, (req, res) => {
  const parsed = createSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid body', details: parsed.error.flatten() })
  const post = createPost(req.userId!, parsed.data.title, parsed.data.mediaUrl)
  res.status(201).json(post)
})

const likeSchema = z.object({ action: z.union([z.literal('like'), z.literal('unlike')]) })
postsRouter.post('/:id/like', requireAuth, (req, res) => {
  const parsed = likeSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid body' })
  const { action } = parsed.data
  const userId = req.userId as string
  const postId = req.params.id as string
  const ok = action === 'like' ? likePost(userId, postId) : unlikePost(userId, postId)
  if (!ok) return res.status(404).json({ error: 'Post not found' })
  res.json({ ok: true })
})

postsRouter.get('/:id/comments', (req, res) => {
  const arr = getCommentsForPost(req.params.id)
  res.json({ items: arr })
})

const commentSchema = z.object({ text: z.string().min(1).max(300) })
postsRouter.post('/:id/comments', requireAuth, (req, res) => {
  const parsed = commentSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: 'Invalid body' })
  const userId = req.userId as string
  const postId = req.params.id as string
  const c = addComment(postId, userId, parsed.data.text)
  res.status(201).json(c)
})
