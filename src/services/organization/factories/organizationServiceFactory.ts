import { OrganizationService } from '../organizationService';
import { PrismaOrganizationRepository } from '@/repositories/organization/prisma/prismaOrganizationRepository';

export function OrganizationServiceFactory() {
    
    const orgRepository = new PrismaOrganizationRepository();

    const organizationService = new OrganizationService(orgRepository);

    return organizationService;
}