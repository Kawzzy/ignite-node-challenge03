import fastify from 'fastify';

import { petRoutes } from './http/routes/pet/petRoutes';
import { organizationRoutes } from './http/routes/organization/organizationRoutes';

export const app = fastify();

app.register(organizationRoutes, {
    prefix: 'org'
});
app.register(petRoutes, {
    prefix: 'pet'
});