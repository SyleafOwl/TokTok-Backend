export type Role = 'viewer' | 'streamer'

export interface User {
  id: string
  username: string
  role: Role
  createdAt: string
}

export interface Post {
  id: string
  authorId: string
  title: string
  mediaUrl?: string
  likes: number
  createdAt: string
}

export interface Comment {
  id: string
  postId: string
  authorId: string
  text: string
  createdAt: string
}

export interface Gift {
  id: string
  name: string
  price: number // in Intis
}

export interface MetricsSummary {
  users: number
  posts: number
  comments: number
  likes: number
  giftsSent: number
}
