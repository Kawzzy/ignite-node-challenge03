export class OrganizationDoesntExistError extends Error {
    
    constructor() {
        super('Organização não existe!');
    }
}