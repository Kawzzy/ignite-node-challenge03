import { z } from 'zod';

export const orgSchema = z.object({
    name: z.string(),
    contact: z.string().refine(check => /\(?(\d{2})?\)? ?\d{3}-?\d{3}-?\d{3}/.test(check), {
        message: 'Número de celular inválido!'
    }),
    number: z.coerce.number(),
    complement: z.string().nullable(),
    zipCode: z.string()/*.refine(check => /\d{5}-?\d{3}/.test(check), {
        message: 'CEP inválido!'
    })*/
});