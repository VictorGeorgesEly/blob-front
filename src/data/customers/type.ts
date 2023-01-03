import { AddressesData, PhonesData, RolesData, Universal } from '../type';
import { UserData } from '../users/type';

export type Expand = {
	addedBy: UserData;
	addressesCustomer: AddressesData[];
	phonesCustomer: PhonesData[];
	rolesCustomer: RolesData;
};

type Customer = {
	addedBy: string;
	email: string;
	emailVisibility: boolean;
	expand?: Expand;
	firstName: string;
	lastName: string;
	username: string;
	verified: boolean;
	socialSecurity: number;
};

export type CustomerData = Customer & Universal;
