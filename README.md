# TokTok Backend (simple y en español)

Backend mínimo en TypeScript + Express, enfocado en lo esencial y con nombres en español. Estructura muy simple: solo `src/` con dos archivos principales `index.ts` y `app.ts`, más `data.ts` para datos en memoria.

## Requisitos
- Node.js 18+

## Configuración
Crear un archivo `.env` (opcional):

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
- `GET /api/salud` — estado de salud del servicio
- Personas
  - `GET /api/personas?limite=10&cursor=...` ⇒ `{ items, siguienteCursor }`
  - `GET /api/personas/:id`
  - `POST /api/personas` — body: `{ nombre: string, rol: 'visitante'|'creador' }`

## Notas
- El almacenamiento es en memoria y se reinicia en cada ejecución. Para persistencia real, sugerido: SQLite + Prisma.
- CORS es permisivo por defecto. Configura `CORS_ORIGIN` para restringirlo.

## Siguientes pasos (sugeridos)
- Persistencia con una base de datos (por ejemplo Render + Postgres).
- Validaciones más completas y manejo de errores.
- Tests básicos y despliegue continuo.