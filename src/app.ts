import fastify/*, { FastifyReply, FastifyRequest }*/ from 'fastify';

// import { getAddressInfo } from './http/utils/getAddressInfo';
import { organizationRoutes } from './http/routes/organization/organizationRoutes';

export const app = fastify();

app.register(organizationRoutes, {
    prefix: 'org'
});

// app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
//     const response = await getAddressInfo('89030170');
    
//     return res.status(200).send(response);
// });