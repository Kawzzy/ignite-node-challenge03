import { hash } from 'bcryptjs';
import { randomUUID } from 'node:crypto';
import { beforeEach, describe, expect, it } from 'vitest';
import { AuthenticationService } from './authenticationService';
import { InMemoryOrganizationRepository } from '@/repositories/organization/inMemory/inMemoryOrganizationRepository';
import { InvalidCredentialsError } from '@/lib/errors/InvalidCredentialsError';

let inMemoryOrgRepo: InMemoryOrganizationRepository;
let authService: AuthenticationService;

describe('Authentication Service', () => {
    
    beforeEach(() => {
        inMemoryOrgRepo = new InMemoryOrganizationRepository();
        authService = new AuthenticationService(inMemoryOrgRepo);
    });

    it('should authenticate an existing organization', async () => {
        
        const email = 'faforg@gmail.com';
        const password = 'faforg!23';

        await inMemoryOrgRepo.create({
            id: randomUUID(),
            name: 'FindAFriend',
            email,
            passwordHash: await hash(password, 6),
            contact: '(11) 222-333-444',
            number: 132,
            complement: 'Sala 2',
            addressId: 1
        });

        const { org } = await authService.authenticate({ email, password });

        expect(org.id).toEqual(expect.any(String));
    });

    it('should not authenticate a nonexisting organization', async () => {

        await expect(() => authService.authenticate({ email: 'edandodicas@test.com', password: 'noconozco' })).rejects.toBeInstanceOf(InvalidCredentialsError);
    });
});