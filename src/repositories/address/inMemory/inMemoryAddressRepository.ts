import { Address, Prisma } from '@prisma/client';
import { IAddressRepository } from '../addressRepository';

export class InMemoryAddressRepository implements IAddressRepository {
    
    public addresses: Address[] = [];

    async create(data: Prisma.AddressCreateInput) {
        const address: Address = {
            id: 1,
            zipCode: data.zipCode,
            street: data.street,
            neighborhood: data.neighborhood,
            city: data.city,
            state: data.state
        };

        this.addresses.push(address);

        return address;
    }

    async findByZipCode(zipCode: string) {
        return this.addresses.find(address => address.zipCode === zipCode) ?? null;
    }

    async findById(id: number) {
        return this.addresses.find(address => address.id === id) ?? null;
    }

}