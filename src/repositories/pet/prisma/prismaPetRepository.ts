import { Prisma } from '@prisma/client';
import { IPetRepository } from '../petRepository';
import { prismaConnection } from '@/lib/prisma';

export class PrismaPetRepository implements IPetRepository {
    
    async create(data: Prisma.PetUncheckedCreateInput) {
        
        const pet = await prismaConnection.pet.create({ data });

        return pet;
    }
}