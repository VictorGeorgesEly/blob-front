import { AddressesData, PhonesData, RolesData, Universal } from '../type';

type User = {
	email: string;
	emailVisibility: boolean;
	expand: Expand;
	first_name: string;
	last_name: string;
	username: string;
	verified: boolean;
	avatar: string;
	birthday: Date;
};

type Expand = {
	addressesUser: AddressesData[];
	phonesUser: PhonesData[];
	rolesUser: RolesData;
};

export type UserData = User & Universal;
