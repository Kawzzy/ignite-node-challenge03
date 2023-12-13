import { FastifyInstance } from 'fastify';
import { petController } from '@/http/controllers/pet/petController';
import { checkOrganization } from '@/http/middleware/checkOrganization';

export async function petRoutes(app: FastifyInstance) {
    app.post('/:organizationId/new', { preHandler: [checkOrganization] } , petController);
}