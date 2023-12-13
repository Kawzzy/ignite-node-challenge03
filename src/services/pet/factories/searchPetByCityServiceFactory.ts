import { SearchPetByCityService } from '../searchPetByCityService';
import { PrismaPetRepository } from '@/repositories/pet/prisma/prismaPetRepository';

export function SearchPetByCityServiceFactory() {

    return new SearchPetByCityService(new PrismaPetRepository);
}