import { PrismaEmailsRepository } from '@/repositories/prisma/prisma-emails-repository'
import { GetEmailsUseCase } from '../get-emails-use-case'

export function makeGetEmailsUseCase() {
    const emailsRepository = new PrismaEmailsRepository()
    const getEmailsUseCase = new GetEmailsUseCase(emailsRepository)

    return getEmailsUseCase
}