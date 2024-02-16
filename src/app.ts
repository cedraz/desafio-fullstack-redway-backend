import fastify from 'fastify'
import { appRoutes } from '@/http/routes'
import { ZodError } from 'zod'
import cors from '@fastify/cors'

export const app = fastify()

app.register(appRoutes)

app.register(cors, {
    origin: true, // Ou '*' para permitir de qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
})

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        reply.status(400).send({ message: 'Validation error.', issues: error.format() })
    }

    return reply.status(500).send({ message: 'Internal server error.' })
})