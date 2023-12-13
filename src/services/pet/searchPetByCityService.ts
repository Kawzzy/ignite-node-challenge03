import { Pet } from '@prisma/client';
import { IPetRepository } from '@/repositories/pet/petRepository';

interface IGetPetByCityRequest {
    city: string
}

interface IGetPetByCityResponse {
    pets: Pet[]
}

export class SearchPetByCityService {

    constructor(private petRepository: IPetRepository) {}

    async getPetByCity({ city }: IGetPetByCityRequest): Promise<IGetPetByCityResponse> {

        const pets = await this.petRepository.getPetByCity(city.toLowerCase());

        return { pets };
    }
}