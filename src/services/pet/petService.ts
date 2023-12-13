import { Age, DependencyLevel, Size } from '@prisma/client';
import { IPetRepository } from '@/repositories/pet/petRepository';

interface IPetRequest {
    name: string,
    age: Age,
    energyLevel: number,
    size: Size,
    dependencyLevel: DependencyLevel,
    organizationId: string
}

export class PetService {
    
    constructor(private petRepository: IPetRepository) {}

    async createPet({ name, age, energyLevel, size, dependencyLevel, organizationId }: IPetRequest) {

        const pet = await this.petRepository.create({
            name,
            age,
            energyLevel,
            size,
            dependencyLevel,
            organizationId
        });

        return { pet };
    }
}