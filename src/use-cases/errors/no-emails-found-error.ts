export class NoEmailsFoundError extends Error {
    constructor() {
        super('No emails found.')
    }
}