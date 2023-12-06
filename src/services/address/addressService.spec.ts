import { AddressService } from './addressService';
import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryAddressRepository } from '@/repositories/address/inMemory/inMemoryAddressRepository';

let inMemoryAddressRepository: InMemoryAddressRepository;
let addressService: AddressService;

describe('AddressService', () => {
    
    beforeEach(() => {
        inMemoryAddressRepository = new InMemoryAddressRepository();
        addressService = new AddressService(inMemoryAddressRepository);
    });

    it('should create an address', async () => {

        const { address } = await addressService.createAddress('89040100');
        
        expect(address?.id).toEqual(expect.any(Number));
        expect(address?.zipCode).toEqual('89040-100');
    });
});