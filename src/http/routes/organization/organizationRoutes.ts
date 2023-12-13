import { FastifyInstance } from 'fastify';
import { addressController } from '@/http/controllers/address/addressController';
import { organizationController } from '@/http/controllers/organization/organizationController';

export async function organizationRoutes(app: FastifyInstance) {
    app.post('/', { preHandler: [addressController] }, organizationController);
}