import { RegisterEmailResponse } from '@/@types/prisma-types'
import { EmailsRepository } from '@/repositories/emails-repository'
import { NoEmailsFoundError } from './errors/no-emails-found-error'

interface GetEmailsUseCaseResponse {
    emails: RegisterEmailResponse[];
}

export class GetEmailsUseCase {
    constructor(private emailsRepository: EmailsRepository) { }

    async handle(): Promise<GetEmailsUseCaseResponse> {
        const emails = await this.emailsRepository.findEmails()

        if (emails.length === 0) {
            throw new NoEmailsFoundError()
        }

        return { emails }
    }
}