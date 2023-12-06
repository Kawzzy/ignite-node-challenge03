import { FastifyReply } from 'fastify';
import { orgSchema } from '@/utils/orgUtils';
import { Request } from '@/utils/addressUtils';
import { OrganizationAlreadyExistsError } from '@/lib/errors/OrganizationAlreadyExists';
import { OrganizationServiceFactory } from '@/services/organization/factories/organizationServiceFactory';

export async function organizationController(req: Request, res: FastifyReply) {
    
    const { name, contact, number, complement } = orgSchema.parse(req.body);
    const addressId = req.address?.id;

    if (!addressId) {
        return res.status(400).send({ message: 'ID do endereço não encontrado'});  
    }

    try {
        const orgService = OrganizationServiceFactory();

        await orgService.createOrg({
            name,
            contact,
            number,
            complement,
            addressId
        });
    } catch (error) {
        if (error instanceof OrganizationAlreadyExistsError) {
            return res.status(409).send({ message: error.message });
        }

        throw error;
    }

    return res.status(201).send();
}