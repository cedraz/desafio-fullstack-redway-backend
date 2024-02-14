import { FastifyInstance } from 'fastify'
import { registerEmail } from './controllers/register-email'
import { getEmails } from './controllers/get-emails'

export async function appRoutes(app: FastifyInstance) {
    app.get('/emails', getEmails)
    app.post('/register-email', registerEmail)
}