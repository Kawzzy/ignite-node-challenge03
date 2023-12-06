import { z } from 'zod';
import { Address } from '@prisma/client';
import { FastifyRequest } from 'fastify';

export const AddressInfoSchema = z.object({
    cep: z.string().optional(),
    logradouro: z.string().optional(),
    complemento: z.string().optional(),
    bairro: z.string().optional(),
    localidade: z.string().optional(),
    uf: z.string().optional(),
    ibge: z.string().optional(),
    gia: z.string().optional(),
    ddd: z.string().optional(),
    siafi: z.string().optional(),
    erro: z.boolean().optional()
});

export interface Request extends FastifyRequest {
    address?: Address
}