export class OrganizationAlreadyExistsError extends Error {
    
    constructor() {
        super('Organização já existe!');
    }
}