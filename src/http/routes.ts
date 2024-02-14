import { FastifyInstance } from 'fastify'
import { registerEmail } from './controllers/register-email'

export async function appRoutes(app: FastifyInstance) {
    app.post('/register-email', registerEmail)
}