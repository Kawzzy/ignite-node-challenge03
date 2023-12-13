import { FastifyReply, FastifyRequest } from 'fastify';
import { petSchema, petValidateParamsSchema } from '@/utils/petUtils';
import { PetServiceFactory } from '@/services/pet/factories/petServiceFactory';

export async function petController(req: FastifyRequest, res: FastifyReply) {
    
    const { name, age, size, energyLevel, dependencyLevel } = petSchema.parse(req.body);
    const { organizationId } = petValidateParamsSchema.parse(req.params);

    const petServiceFactory = PetServiceFactory();

    try {
        petServiceFactory.createPet({
            name,
            age,
            size,
            energyLevel,
            dependencyLevel,
            organizationId
        });
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }

    return res.status(201).send();
}