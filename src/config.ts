export const CONFIG = {
  puerto: Number(process.env.PORT ?? 3000),
  origenesPermitidos: (process.env.CORS_ORIGIN ?? '*').split(',')
}
