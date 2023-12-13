import { FastifyRequest } from 'fastify';
import { petValidateParamsSchema } from '@/utils/petUtils';
import { OrganizationDoesntExistError } from '@/lib/errors/OrganizationDoesntExist';
import { PrismaOrganizationRepository } from '@/repositories/organization/prisma/prismaOrganizationRepository';

export async function checkOrganization(req: FastifyRequest) {
    const { organizationId } = petValidateParamsSchema.parse(req.params);

    const prismaOrgRepository = new PrismaOrganizationRepository();

    const org = await prismaOrgRepository.findById(organizationId);

    if (!org) {
        throw new OrganizationDoesntExistError();
    }
}