import { AddressesData, PhonesData, RolesData, Universal } from '../type';
import { UserData } from '../users/type';

type Customer = {
	addedBy: string;
	email: string;
	emailVisibility: boolean;
	expand?: Expand;
	first_name: string;
	last_name: string;
	username: string;
	verified: boolean;
	social_security: number;
};

type Expand = {
	added_by: UserData;
	addressesCustomer: AddressesData[];
	phonesCustomer: PhonesData[];
	rolesCustomer: RolesData;
};

export type CustomerData = Customer & Universal;
