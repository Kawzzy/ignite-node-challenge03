import { randomUUID } from 'node:crypto';
import { PetService } from './petService';
import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryPetRepository } from '@/repositories/pet/inMemory/inMemoryPetRepository';

let inMemoryPetRepository: InMemoryPetRepository;
let petService: PetService;

describe('PetService', () => {
    
    beforeEach(() => {
        inMemoryPetRepository = new InMemoryPetRepository();
        petService = new PetService(inMemoryPetRepository);
    });

    it('should create a pet', async () => {
        
        const { pet } = await petService.createPet({
            name: 'Michi',
            age: 'JOVEM',
            dependencyLevel: 'MEDIO',
            energyLevel: 2,
            size: 'GRANDE',
            organizationId: randomUUID()
        });

        expect(pet.id).toEqual(expect.any(String));
    });
});