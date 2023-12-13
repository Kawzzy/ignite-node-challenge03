import { Pet, Prisma } from '@prisma/client';

export interface IPetRepository {

    create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>

    getPetByCity(city: string): Promise<Pet[]>
}