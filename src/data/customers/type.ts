import { AddressesData, PhonesData, RolesData, Universal } from '../type';
import { UserData } from '../users/type';

type Customer = {
	addedBy: string;
	email: string;
	emailVisibility: boolean;
	expand: Expand;
	firstName: string;
	lastName: string;
	username: string;
	verified: boolean;
	socialSecurity: number;
};

type Expand = {
	addedBy: UserData;
	addressesCustomer: AddressesData[];
	phonesCustomer: PhonesData[];
	rolesCustomer: RolesData;
};

export type CustomerData = Customer & Universal;
