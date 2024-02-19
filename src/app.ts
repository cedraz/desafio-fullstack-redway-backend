// Fastify
import fastify from 'fastify'
import { appRoutes } from '@/http/routes'

// Zod
import { ZodError } from 'zod'

// Cors
import cors from '@fastify/cors'

// Swagger
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export const app = fastify()

const swaggerOptions = {
    swagger: {
        info: {
            title: 'My Title',
            description: 'My Description.',
            version: '1.0.0',
        },
        host: 'localhost',
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [{ name: 'Default', description: 'Default' }],
    }
}

const swaggerUiOptions = {
    routePrefix: '/docs',
    exposeRoute: true,
}

app.register((app, options, done) => {
    app.get('/', {
        schema: {
            tags: ['Default'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                    },
                },
            },
        },
        handler: (req, res) => {
            res.send({ message: 'API rodando' })
        },
    })
    done()
})

app.register(fastifySwagger, swaggerOptions)
app.register(fastifySwaggerUi, swaggerUiOptions)

app.register(appRoutes)

app.register(cors, {
    origin: true, // Ou '*' para permitir de qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
})

app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
        console.log(error.format())
        reply.status(400).send({ message: 'Validation error.', issues: error.format() })
    }

    return reply.status(500).send({ message: 'Internal server error.' })
})