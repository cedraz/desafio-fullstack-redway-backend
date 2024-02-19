import { FastifyInstance } from 'fastify'
import { registerEmail } from './controllers/register-email'
import { getEmails } from './controllers/get-emails'

export async function appRoutes(app: FastifyInstance) {
    app.get('/emails', {
        schema: {
            response: {
                200: {
                    description: 'Successful response',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            email: { type: 'string' },
                        },
                    },
                    minItems: 3
                },
                409: {
                    description: 'No emails found',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'No emails found'
                        },
                    },
                },
                500: {
                    description: 'Internal server error',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Internal server error'
                        },
                    },
                }
            },
        },
    }, getEmails)

    app.post('/emails', {
        schema: {
            body: {
                type: 'object',
                required: ['email'],
                properties: {
                    email: { type: 'string' }
                }
            },
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        message: { type: 'string', example: 'Email registered' },
                        email: { type: 'string', example: 'user@example.com'}
                    }
                },
                400: {
                    description: 'Validation error',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Validation error'
                        },
                        issues: {
                            type: 'object',
                            properties: {
                                _errors: {
                                    type: 'array',
                                    items: {
                                        type: 'string'
                                    }
                                },
                                email: {
                                    type: 'object',
                                    properties: {
                                        _errors: {
                                            type: 'array',
                                            items: {
                                                type: 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                },
                409: {
                    description: 'Email already exists',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Email already exists'
                        }
                    },
                },
                500: {
                    description: 'Internal server error',
                    type: 'object',
                    properties: {
                        message: { 
                            type: 'string', 
                            example: 'Internal server error'
                        },
                    },
                }
            }
        },
    }, registerEmail)
}