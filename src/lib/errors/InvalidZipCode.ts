export class InvalidZipCode extends Error {
    
    constructor() {
        super('CEP deve conter 8 dígitos!');
    }
}