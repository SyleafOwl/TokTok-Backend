# TokTok Backend (mínimo viable)

API REST en TypeScript con Express para soportar el frontend TokTok. Incluye endpoints básicos de auth, posts, likes, comentarios, regalos, métricas y estado de live. Usa almacenamiento en memoria (mock) por ahora.

## Requisitos
- Node.js 18+

## Configuración
Crea un archivo `.env` (opcional):

```
PORT=3000
CORS_ORIGIN=http://localhost:5173
```

## Comandos
- Desarrollo (recomendado ejecutar en CMD por la política de PowerShell):
  - `npm install`
  - `npm run dev`
- Build y ejecución:
  - `npm run build`
  - `npm start`
- Typecheck:
  - `npm run typecheck`

Si PowerShell bloquea `npm`, ejecuta los comandos con `cmd /c`:

```
cmd /c npm install
cmd /c npm run dev
```

## Endpoints
- `GET /api/health` — healthcheck
- Auth
  - `POST /api/auth/login` — body: `{ username, role: 'viewer'|'streamer' }` ⇒ `{ token, user }`
- Users
  - `GET /api/users/:id`
- Posts
  - `GET /api/posts?limit=10&cursor=...` ⇒ `{ items, nextCursor }`
  - `POST /api/posts` (Auth) — body: `{ title, mediaUrl? }`
  - `POST /api/posts/:id/like` (Auth) — body: `{ action: 'like'|'unlike' }`
  - `GET /api/posts/:id/comments` ⇒ `{ items }`
  - `POST /api/posts/:id/comments` (Auth) — body: `{ text }`
- Gifts
  - `GET /api/gifts` ⇒ `{ items: Gift[] }`
  - `POST /api/gifts/send` (Auth) — body: `{ toUserId, giftId }`
- Metrics
  - `GET /api/metrics/summary` ⇒ `{ users, posts, comments, likes, giftsSent }`
- Live
  - `GET /api/live/:username/status` ⇒ `{ username, live }`
  - `POST /api/live/start` (Auth, streamer)
  - `POST /api/live/stop` (Auth, streamer)

## Notas
- El almacenamiento es en memoria y se reinicia en cada ejecución. Para persistencia real, sugerido: SQLite + Prisma.
- CORS es permisivo por defecto. Configura `CORS_ORIGIN` para restringirlo.

## Siguientes pasos (sugeridos)
- Persistencia con SQLite/Prisma y migraciones.
- JWT en lugar de tokens en memoria.
- Subida de archivos (S3/local) para media.
- Tests (Vitest/Jest) y CI.
- Rate limiting y logging.