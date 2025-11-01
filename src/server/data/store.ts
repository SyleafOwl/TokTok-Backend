import type { Comment, Gift, MetricsSummary, Post, Role, User } from '../types.js'

// Simple in-memory store. Replace with a DB later.
const users = new Map<string, User>()
const posts = new Map<string, Post>()
const comments = new Map<string, Comment>()
const tokens = new Map<string, string>() // token -> userId
const likesByUser = new Map<string, Set<string>>() // userId -> postIds
const liveStatusByUser = new Map<string, boolean>() // username -> live?

let giftsSent = 0
let idCounter = 1
const nextId = () => String(idCounter++)

export const seed = () => {
  if (users.size > 0) return
  const u1: User = { id: nextId(), username: 'demo_viewer', role: 'viewer', createdAt: new Date().toISOString() }
  const u2: User = { id: nextId(), username: 'demo_streamer', role: 'streamer', createdAt: new Date().toISOString() }
  users.set(u1.id, u1)
  users.set(u2.id, u2)

  const p1: Post = { id: nextId(), authorId: u2.id, title: 'Primer post', likes: 0, createdAt: new Date().toISOString() }
  const p2: Post = { id: nextId(), authorId: u2.id, title: 'Segundo post', likes: 0, createdAt: new Date().toISOString() }
  posts.set(p1.id, p1)
  posts.set(p2.id, p2)
}

export const getUserById = (id: string) => users.get(id)
export const getUserByUsername = (username: string) => {
  for (const u of users.values()) if (u.username === username) return u
  return undefined
}

export const ensureUser = (username: string, role: Role): User => {
  const found = getUserByUsername(username)
  if (found) return found
  const u: User = { id: nextId(), username, role, createdAt: new Date().toISOString() }
  users.set(u.id, u)
  return u
}

export const issueToken = (userId: string): string => {
  const token = Buffer.from(`${userId}:${Date.now()}`).toString('base64url')
  tokens.set(token, userId)
  return token
}

export const getUserIdFromToken = (token?: string) => (token ? tokens.get(token) : undefined)

export const listPosts = (cursor?: string, limit = 10) => {
  const arr = Array.from(posts.values()).sort((a, b) => b.id.localeCompare(a.id))
  let start = 0
  if (cursor) {
    const idx = arr.findIndex((p) => p.id === cursor)
    if (idx >= 0) start = idx + 1
  }
  const items = arr.slice(start, start + limit)
  const last = items[items.length - 1]
  const nextCursor = items.length === limit && last ? last.id : undefined
  return { items, nextCursor }
}

export const createPost = (authorId: string, title: string, mediaUrl?: string): Post => {
  const base = { id: nextId(), authorId, title, likes: 0, createdAt: new Date().toISOString() }
  const p: Post = mediaUrl ? { ...base, mediaUrl } : base
  posts.set(p.id, p)
  return p
}

export const likePost = (userId: string, postId: string) => {
  const p = posts.get(postId)
  if (!p) return false
  const set = likesByUser.get(userId) ?? new Set<string>()
  if (set.has(postId)) return true
  set.add(postId)
  likesByUser.set(userId, set)
  p.likes += 1
  return true
}

export const unlikePost = (userId: string, postId: string) => {
  const p = posts.get(postId)
  if (!p) return false
  const set = likesByUser.get(userId)
  if (!set || !set.has(postId)) return true
  set.delete(postId)
  p.likes = Math.max(0, p.likes - 1)
  return true
}

export const getCommentsForPost = (postId: string): Comment[] => {
  return Array.from(comments.values()).filter((c) => c.postId === postId)
}

export const addComment = (postId: string, authorId: string, text: string): Comment => {
  const c: Comment = { id: nextId(), postId, authorId, text, createdAt: new Date().toISOString() }
  comments.set(c.id, c)
  return c
}

export const gifts: Gift[] = [
  { id: 'rose', name: 'Rosa', price: 5 },
  { id: 'star', name: 'Estrella', price: 10 },
  { id: 'diamond', name: 'Diamante', price: 50 }
]

export const sendGift = (fromUserId: string, toUserId: string, giftId: string) => {
  // Only count metrics for now
  if (!getUserById(toUserId)) return false
  if (!gifts.find((g) => g.id === giftId)) return false
  giftsSent += 1
  return true
}

export const getMetrics = (): MetricsSummary => {
  const likes = Array.from(posts.values()).reduce((acc, p) => acc + p.likes, 0)
  return { users: users.size, posts: posts.size, comments: comments.size, likes, giftsSent }
}

export const getLiveStatus = (username: string) => liveStatusByUser.get(username) ?? false
export const setLiveStatus = (username: string, live: boolean) => liveStatusByUser.set(username, live)
