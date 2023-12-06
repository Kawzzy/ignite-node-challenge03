import { OrganizationAlreadyExistsError } from '@/lib/errors/OrganizationAlreadyExists';
import { IOrganizationRepository } from '@/repositories/organization/organizationRepository';

interface IOrganizationServiceRequest {
    name: string
    contact: string
    number: number
    complement: string | null,
    addressId: number
}

export class OrganizationService {

    constructor(private orgRepository: IOrganizationRepository) {}

    async createOrg({ name, contact, number, complement, addressId }: IOrganizationServiceRequest) {

        const orgFiltered = await this.orgRepository.findByName(name);

        if (orgFiltered) {
            throw new OrganizationAlreadyExistsError();
        }

        const org = await this.orgRepository.create({
            name,
            contact, 
            number,
            complement,
            addressId
        });

        return { org };
    }
}