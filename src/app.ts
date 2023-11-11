import fastify, { FastifyReply, FastifyRequest } from 'fastify';

import { getAddressInfo } from './http/utils/getAddressInfo';

export const app = fastify();

app.get('/', async (req: FastifyRequest, res: FastifyReply) => {
    const { data } = await getAddressInfo('89030170');
    
    return res.status(200).send(data);
});