import { Prisma } from '@prisma/client';
import { prismaConnection } from '@/lib/prisma';
import { IAddressRepository } from '../addressRepository';

export class PrismaAddressRepository implements IAddressRepository {

    async create(data: Prisma.AddressCreateInput) {
        return await prismaConnection.address.create({ data });
    }

    async findByZipCode(zipCode: string) {
        return await prismaConnection.address.findFirst({
            where: {
                zipCode
            }
        });
    }

    async findById(id: number) {        
        return await prismaConnection.address.findFirst({
            where: {
                id
            }
        });
    }
}