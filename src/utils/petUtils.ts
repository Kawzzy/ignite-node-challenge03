import { z } from 'zod';

export const petValidateParamsSchema = z.object({
    organizationId: z.string().uuid()
});

export const petSchema = z.object({
    name: z.string(),
    age: z.enum(['FILHOTE', 'JOVEM', 'ADULTO', 'VELHO']),
    energyLevel: z.coerce.number(),
    size: z.enum(['PEQUENO', 'MEDIO', 'GRANDE']),
    dependencyLevel: z.enum(['DEPENDENTE', 'MEDIO', 'INDEPENDENTE'])
});