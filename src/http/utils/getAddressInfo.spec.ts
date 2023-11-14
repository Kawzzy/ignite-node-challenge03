import { describe, expect, it } from 'vitest';
import { getAddressInfo } from './getAddressInfo';
import { InvalidZipCode } from '@/lib/errors/InvalidZipCode';

describe('getAddressInfo', () => {
    it('should return the city\'s info based on zip-code', async () => {
        const response = await getAddressInfo('89040100');

        expect(response.data).toEqual(expect.objectContaining({ 'cep': '89040-100'}));
    });

    it('should return InvalidZipCode error', async () => {
        await expect(() => 
            getAddressInfo('21903')
        ).rejects.toBeInstanceOf(InvalidZipCode);
    });

    it('should return zip-code not found', async () => {
        const zipCode = '00000000';
        const response = await getAddressInfo(zipCode);

        expect(response.data).toEqual(`CEP ${zipCode} não encontrado!`);
    });
});