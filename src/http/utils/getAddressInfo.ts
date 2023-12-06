import fetch from 'node-fetch';

import { z } from 'zod';
import { AddressInfoSchema } from '@/utils/addressUtils';
import { InvalidZipCode } from '@/lib/errors/InvalidZipCode';

const dataErrorSchema = z.object({
    erro: z.boolean(),
    zipCode: z.string().optional()
});

interface IAddressResponseInfo {
    zipCode: string
    street: string
    neighborhood: string
    city: string
    state: string
}

export async function getAddressInfo(zipCodeParam: string): Promise<string | IAddressResponseInfo> {

    if (zipCodeParam.length != 8) {
        throw new InvalidZipCode;
    }
    
    const url = `https://viacep.com.br/ws/${zipCodeParam}/json/`;  

    const responseSchema = z.union([AddressInfoSchema, dataErrorSchema]);

    let data;

    try {
        const response = await fetch(url);
        data = await response.json();
    } catch (error) {
        throw new Error(`Error: ${error}`);
    }
    
    const parsedData = responseSchema.parse(data);

    if ('erro' in parsedData) {
        return `CEP ${zipCodeParam} não encontrado!`;
    }

    let zipCode = '', 
        street = '', 
        neighborhood = '', 
        city = '', 
        state = '';

    if (parsedData.cep && parsedData.logradouro && parsedData.bairro && parsedData.localidade && parsedData.uf) {
        zipCode = parsedData.cep;
        street = parsedData.logradouro;
        neighborhood = parsedData.bairro;
        city = parsedData.localidade;
        state = parsedData.uf;
    }
    
    return {
        zipCode,
        street,
        neighborhood,
        city,
        state,
    }; 
}