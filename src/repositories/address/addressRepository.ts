import { Address, Prisma } from '@prisma/client';

export interface IAddressRepository {

    create(data: Prisma.AddressCreateInput): Promise<Address>

    findByZipCode(zipCode: string): Promise<Address | null>
    
    findById(id: number): Promise<Address | null>
}