import { EmailAlreadyExistsError } from '@/use-cases/errors/email-already-exists-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-email-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerEmail(request: FastifyRequest, reply: FastifyReply) {
    const registerEmailBodySchema = z.object({
        email: z.string().email()
    })

    const { email } = registerEmailBodySchema.parse(request.body)

    try {
        const registerEmailUseCase = makeRegisterUseCase()

        const { registeredEmail } = await registerEmailUseCase.handle({ email })

        console.log(registeredEmail.email, typeof registeredEmail)

        return reply.status(201).send({ message: 'Email registered', email: registeredEmail.email })
    } catch (error) {
        if (error instanceof EmailAlreadyExistsError) {
            return reply.status(409).send({ message: error.message })
        }

        throw error
    }
}