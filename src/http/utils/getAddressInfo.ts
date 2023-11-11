import fetch from 'node-fetch';

import { z } from 'zod';
import { InvalidZipCode } from '@/lib/errors/InvalidZipCode';

const dataErrorSchema = z.object({
    erro: z.boolean()
});

export async function getAddressInfo(zipCode: string) {

    if (zipCode.length != 8) {
        throw new InvalidZipCode;
    }
    
    const url = `https://viacep.com.br/ws/${zipCode}/json/`;  

    let data;

    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
    
    try {
        const dataErro = dataErrorSchema.parse(data);

        if (dataErro.erro) {
            return { data: `CEP ${zipCode} não encontrado!` };
        }
    } catch (error) {
        // if any error occurs, it's bc the data returned has the correct expected data
    }
    
    return { data }; 
}