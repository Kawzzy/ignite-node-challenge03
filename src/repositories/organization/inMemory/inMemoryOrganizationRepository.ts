import { randomUUID } from 'node:crypto';
import { Organization, Prisma } from '@prisma/client';
import { IOrganizationRepository } from '../organizationRepository';

export class InMemoryOrganizationRepository implements IOrganizationRepository {
    
    public orgs: Organization[] = [];
    
    async create(data: Prisma.OrganizationUncheckedCreateInput) {
        
        const org: Organization = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            passwordHash: data.passwordHash,
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
        return this.orgs.find(org => org.name === name) ?? null;
    }

    async findById(organizationId: string): Promise<Organization | null> {
        return this.orgs.find(org => org.id === organizationId) ?? null;
    }

    async findByEmail(email: string): Promise<Organization | null> {
        return this.orgs.find(org => org.email === email) ?? null;
    }
}