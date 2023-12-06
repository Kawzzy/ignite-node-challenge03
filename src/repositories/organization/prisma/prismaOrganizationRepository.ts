import { prismaConnection } from '@/lib/prisma';
import { Organization, Prisma } from '@prisma/client';
import { IOrganizationRepository } from '../organizationRepository';

export class PrismaOrganizationRepository implements IOrganizationRepository {
    
    async create(data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization> {
        
        const org = await prismaConnection.organization.create({ data });

        return org;
    }

    async findByName(name: string): Promise<Organization | null> {
        
        const org = await prismaConnection.organization.findFirst({
            where: {
                name
            }
        });

        return org;
    }
}