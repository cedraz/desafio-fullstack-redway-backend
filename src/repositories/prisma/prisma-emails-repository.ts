import { RegisterEmailInput } from '@/@types/prisma-types'
import { EmailsRepository } from '@/repositories/emails-repository'
import { prisma } from '@/lib/prisma'

export class PrismaEmailsRepository implements EmailsRepository {
    async findEmails() {
        const emails = await prisma.email.findMany()

        return emails
    }

    async findEmail({ email }: { email: string }) {
        const foundEmail = await prisma.email.findUnique({
            where: {
                email
            }
        })

        return foundEmail !== null ? true : false
    }

    async registerEmail(data: RegisterEmailInput) {
        const registeredEmail = await prisma.email.create({
            data
        })

        return registeredEmail
    }
}