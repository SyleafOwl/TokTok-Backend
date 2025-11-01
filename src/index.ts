import 'dotenv/config'
import { createServer } from 'node:http'
import app from './server/app.js'

const PORT = Number(process.env.PORT ?? 3000)

const server = createServer(app)

server.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`[TokTok] API listening on http://localhost:${PORT}`)
})

// Graceful shutdown
process.on('SIGINT', () => {
	// eslint-disable-next-line no-console
	console.log('\n[TOKTOK] Shutting down...')
	server.close(() => process.exit(0))
})
