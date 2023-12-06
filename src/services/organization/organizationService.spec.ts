import { Address } from '@prisma/client';
import { beforeEach, describe, expect, it } from 'vitest';
import { OrganizationService } from './organizationService';
import { OrganizationAlreadyExistsError } from '@/lib/errors/OrganizationAlreadyExists';
import { InMemoryOrganizationRepository } from '@/repositories/organization/inMemory/inMemoryOrganizationRepository';

let inMemoryOrgRepository: InMemoryOrganizationRepository;
let orgService: OrganizationService;

describe('organizationService', () => {

    beforeEach(() => {
        inMemoryOrgRepository = new InMemoryOrganizationRepository();
        orgService = new OrganizationService(inMemoryOrgRepository);
    });

    it('should create an organization', async () => {

        const address: Address = {
            id: 1,
            city: 'Blumenau',
            neighborhood: 'Vila Nova',
            state: 'SC',
            street: 'Benjamin Constant',
            zipCode: '89130100'
        };

        const { org } = await orgService.createOrg({
            name: 'Find a Friend',
            contact: '47992123456',
            number: 198,
            complement: 'sala 2',
            addressId: address.id,
        });

        expect(org.id).toEqual(expect.any(String));
    });

    it('should not create the same Organization twice', async () => {
        
        const address: Address = {
            id: 1,
            city: 'Blumenau',
            neighborhood: 'Vila Nova',
            state: 'SC',
            street: 'Benjamin Constant',
            zipCode: '89130100'
        };

        await orgService.createOrg({
            name: 'Find a Friend',
            contact: '47992123456',
            number: 198,
            complement: 'sala 2',
            addressId: address.id,
        });
        
        await expect(() =>
            orgService.createOrg({
                name: 'Find a Friend',
                contact: '47992123456',
                number: 198,
                complement: 'sala 2',
                addressId: address.id,
            })
        ).rejects.toBeInstanceOf(OrganizationAlreadyExistsError);
    });
});