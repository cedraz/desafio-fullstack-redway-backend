import { NoEmailsFoundError } from '@/use-cases/errors/no-emails-found-error'
import { makeGetEmailsUseCase } from '@/use-cases/factories/make-get-emails-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getEmails(request: FastifyRequest, reply: FastifyReply) {
    try {
        const getEmailsUseCase = makeGetEmailsUseCase()
        
        const { emails } = await getEmailsUseCase.handle()

        return reply.status(201).send({ emails })
    } catch (error) {
        if (error instanceof NoEmailsFoundError) {
            return reply.status(409).send({ message: error.message })
        }

        console.log(error)

        throw error
    }
}