import { AddressService } from '../addressService';
import { PrismaAddressRepository } from '@/repositories/address/prisma/prismaAddressRepository';

export function AddressServiceFactory() {
    return new AddressService(new PrismaAddressRepository());
}