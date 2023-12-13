import { PrismaPetRepository } from '@/repositories/pet/prisma/prismaPetRepository';
import { PetService } from '../petService';

export function PetServiceFactory() {

    const petRepository = new PrismaPetRepository();

    const petService = new PetService(petRepository);

    return petService;
}