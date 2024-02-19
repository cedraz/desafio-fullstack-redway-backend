import { PrismaEmailsRepository } from '@/repositories/prisma/prisma-emails-repository'
import { RegisterEmailUseCase } from '../register-email-use-case'

export function makeRegisterUseCase() {
    const emailsRepository = new PrismaEmailsRepository()
    const registerEmailUseCase = new RegisterEmailUseCase(emailsRepository)

    return registerEmailUseCase
}