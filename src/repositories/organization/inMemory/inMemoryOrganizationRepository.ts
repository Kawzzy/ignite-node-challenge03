import { randomUUID } from 'node:crypto';
import { Organization, Prisma } from '@prisma/client';
import { IOrganizationRepository } from '../organizationRepository';

export class InMemoryOrganizationRepository implements IOrganizationRepository {
    
    public orgs: Organization[] = [];
    
    async create(data: Prisma.OrganizationUncheckedCreateInput) {
        
        const org: Organization = {
            id: randomUUID(),
            name: data.name,
            contact: data.contact,
            createdAt: new Date(),
            addressId: data.addressId,
            number: data.number,
            complement: data.complement ?? null
        };

        this.orgs.push(org);

        return org;
    }

    async findByName(name: string): Promise<Organization | null> {
        const org = this.orgs.find(org => org.name === name);

        return org ?? null;
    }
}