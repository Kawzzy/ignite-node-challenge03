import { FastifyInstance } from 'fastify';
import { petController } from '@/http/controllers/pet/petController';
import { checkOrganization } from '@/http/middleware/checkOrganization';
import { searchPetByCityController } from '@/http/controllers/pet/searchPetByCityController';

export async function petRoutes(app: FastifyInstance) {
    app.post('/:organizationId/new', { preHandler: [checkOrganization] }, petController);
    app.get('/getAllByCity', searchPetByCityController);
}