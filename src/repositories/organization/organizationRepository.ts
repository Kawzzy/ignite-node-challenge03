import { Organization, Prisma } from '@prisma/client';

export interface IOrganizationRepository {

    create(data: Prisma.OrganizationUncheckedCreateInput): Promise<Organization>

    findByName(name: string): Promise<Organization | null>
}