import { RegisterEmailResponse } from '@/@types/prisma-types'
import { EmailsRepository } from '@/repositories/emails-repository'
import { EmailAlreadyExistsError } from './errors/email-already-exists-error'

interface RegisterEmailUseCaseRequest {
    email: string;
}

interface RegisterEmailUseCaseResponse {
    registeredEmail: RegisterEmailResponse;
}

export class RegisterEmailUseCase {
    constructor(private emailsRepository: EmailsRepository) { }

    async handle({ email }: RegisterEmailUseCaseRequest): Promise<RegisterEmailUseCaseResponse> {
        const emailExists = await this.emailsRepository.findEmail({ email })

        if (emailExists) {
            throw new EmailAlreadyExistsError()
        }

        const registeredEmail = await this.emailsRepository.registerEmail({ email })

        console.log(registeredEmail, typeof registeredEmail)

        return { registeredEmail }
    }
}