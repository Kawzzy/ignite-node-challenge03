import { randomUUID } from 'node:crypto';
import { Pet, Prisma } from '@prisma/client';
import { IPetRepository } from '../petRepository';

export class InMemoryPetRepository implements IPetRepository {
    
    pets: Pet[] = [];

    async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {

        const { id, name, age, energyLevel, dependencyLevel, size, isAvailable, adoptedAt, organizationId } = data;
        
        const pet: Pet = {
            id: id ?? randomUUID(),
            name: name,
            age: age,
            energyLevel: energyLevel,
            dependencyLevel: dependencyLevel,
            size: size,
            isAvailable: isAvailable ?? true,
            adoptedAt: (!adoptedAt || typeof adoptedAt === 'string' ) ? null : adoptedAt,
            registeredAt: new Date(),
            organizationId: organizationId
        };

        return pet;
    }

    async getPetByCity(city: string) {
        // idk how to filter the city on address by name from this Pets' array
        city ?? '';
        const pets: Pet[] = [];
        return pets;
    }
}