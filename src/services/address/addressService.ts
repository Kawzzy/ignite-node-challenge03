import { z } from 'zod';
import { AddressInfoSchema } from '@/utils/addressUtils';
import { getAddressInfo } from '@/http/utils/getAddressInfo';
import { IAddressRepository } from '@/repositories/address/addressRepository';

const selectedSchema = z.object({
    zipCode: AddressInfoSchema.shape.cep,
    street: AddressInfoSchema.shape.logradouro,
    neighborhood: AddressInfoSchema.shape.bairro,
    city: AddressInfoSchema.shape.localidade,
    state: AddressInfoSchema.shape.uf
});

export class AddressService {

    constructor(private addressRepository: IAddressRepository) {}

    async createAddress(zipCodeParam: string) {
        const addressResponse = await getAddressInfo(zipCodeParam);

        const { zipCode, street, neighborhood, city, state } = selectedSchema.parse(addressResponse);
        
        let address;

        if (zipCode) {
            
            address = await this.addressRepository.findByZipCode(zipCode);
    
            if (!address && street && neighborhood && city && state) {
                address = await this.addressRepository.create({
                    zipCode,
                    street: street.toLowerCase(),
                    neighborhood: neighborhood.toLowerCase(),
                    city: city.toLowerCase(),
                    state: state.toLowerCase()
                });
            }
        }

        return { address };
    }
}