import { Pet, Prisma } from '@prisma/client';
import { prismaConnection } from '@/lib/prisma';
import { IPetRepository } from '../petRepository';

export class PrismaPetRepository implements IPetRepository {
    
    async create(data: Prisma.PetUncheckedCreateInput) {
        
        const pet = await prismaConnection.pet.create({ data });

        return pet;
    }

    async getPetByCity(city: string): Promise<Pet[]> {
        
        const pets = await prismaConnection.pet.findMany({
            where: {
                organization: {
                    address: {
                        city: city
                    }
                }
            }
        });

        return pets;
    }
}