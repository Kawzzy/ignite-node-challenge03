import { orgSchema } from '@/utils/orgUtils';
import { Request } from '@/utils/addressUtils';
import { AddressServiceFactory } from '@/services/address/factories/addressServiceFactory';

export async function addressController(req: Request) {
    const { zipCode } = orgSchema.parse(req.body);

    const addressService = AddressServiceFactory();
    
    const { address } = await addressService.createAddress(zipCode);

    if (address) {
        req.address = address;
    }
}