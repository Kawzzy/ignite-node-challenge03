import { compare } from 'bcryptjs';
import { Organization } from '@prisma/client';
import { InvalidCredentialsError } from '@/lib/errors/InvalidCredentialsError';
import { IOrganizationRepository } from '@/repositories/organization/organizationRepository';

interface IAuthRequest {
    email: string,
    password: string
}

interface IAuthResponse {
    org: Organization
}

export class AuthenticationService {

    constructor(private orgRepository: IOrganizationRepository) {}

    async authenticate({ email, password }: IAuthRequest): Promise<IAuthResponse> {

        const org = await this.orgRepository.findByEmail(email);

        if (!org) {
            throw new InvalidCredentialsError();
        }
        
        const doesPasswordMatch = compare(password, org.passwordHash);
        
        if (!doesPasswordMatch) {
            throw new InvalidCredentialsError();
        }

        return { org };
    }
}