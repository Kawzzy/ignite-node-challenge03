import { z } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { SearchPetByCityServiceFactory } from '@/services/pet/factories/searchPetByCityServiceFactory';

const searchByCitySchema = z.object({
    city: z.string()
});

export async function searchPetByCityController(req: FastifyRequest, res: FastifyReply) {
    const city = searchByCitySchema.parse(req.query);

    const searchPetByCityServiceFactory = SearchPetByCityServiceFactory();

    const pets = await searchPetByCityServiceFactory.getPetByCity(city);

    return res.status(200).send({ pets });
}