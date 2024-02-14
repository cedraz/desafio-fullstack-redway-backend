import { RegisterEmailInput, RegisterEmailResponse } from '@/@types/prisma-types'

export interface EmailsRepository {
    findEmails(): Promise<RegisterEmailResponse[]>
    findEmail({ email }: { email: string }): Promise<true | false>
    registerEmail(data: RegisterEmailInput): Promise<RegisterEmailResponse>
}