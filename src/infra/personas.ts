export type Rol = 'visitante' | 'creador'

export interface Persona {
  id: string
  nombre: string
  rol: Rol
  creadoEn: string
}

const personas = new Map<string, Persona>()
const tokens = new Map<string, string>() // token -> personaId
let idCounter = 1

const nuevoId = () => String(idCounter++)

export const sembrarPersonas = () => {
  if (personas.size > 0) return
  const p1: Persona = { id: nuevoId(), nombre: 'demo_visitante', rol: 'visitante', creadoEn: new Date().toISOString() }
  const p2: Persona = { id: nuevoId(), nombre: 'demo_creador', rol: 'creador', creadoEn: new Date().toISOString() }
  personas.set(p1.id, p1)
  personas.set(p2.id, p2)
}

export const obtenerPersonaPorId = (id: string) => personas.get(id)
export const obtenerPersonaPorNombre = (nombre: string) => {
  for (const p of personas.values()) if (p.nombre === nombre) return p
  return undefined
}

export const asegurarPersona = (nombre: string, rol: Rol): Persona => {
  const encontrada = obtenerPersonaPorNombre(nombre)
  if (encontrada) return encontrada
  const nueva: Persona = { id: nuevoId(), nombre, rol, creadoEn: new Date().toISOString() }
  personas.set(nueva.id, nueva)
  return nueva
}

export const emitirToken = (personaId: string): string => {
  const token = Buffer.from(`${personaId}:${Date.now()}`).toString('base64url')
  tokens.set(token, personaId)
  return token
}

export const obtenerPersonaIdDesdeToken = (token?: string) => (token ? tokens.get(token) : undefined)

export const listarPersonas = (cursor?: string, limite = 10) => {
  const arr = Array.from(personas.values()).sort((a, b) => b.id.localeCompare(a.id))
  let inicio = 0
  if (cursor) {
    const idx = arr.findIndex((p) => p.id === cursor)
    if (idx >= 0) inicio = idx + 1
  }
  const items = arr.slice(inicio, inicio + limite)
  const ultima = items[items.length - 1]
  const siguienteCursor = items.length === limite && ultima ? ultima.id : undefined
  return { items, siguienteCursor }
}
