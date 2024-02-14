import fastify from 'fastify'
import { appRoutes } from '@/http/routes'
import { ZodError } from 'zod'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        reply.status(400).send({ message: 'Validation error.', issues: error.format() })
    }

    return reply.status(500).send({ message: 'Internal server error.' })
})