import { AddressesData, PhonesData, RolesData, Universal } from '../type';

type User = {
	email: string;
	emailVisibility: boolean;
	expand: Expand;
	firstName: string;
	lastName: string;
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
