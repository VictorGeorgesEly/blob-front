export type Data<T> = {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: T[];
};

export type Universal = {
	collectionID: string;
	collectionName: string;
	created: Date;
	id: string;
	updated: Date;
};

type Addresses = {
	accessCode: string;
	additional: string;
	city: string;
	country: string;
	customer: string;
	number: number;
	postCode: number;
	repetitionIndex: string;
	street: string;
	user: string;
};

export type AddressesData = Addresses & Universal;

type Phones = {
	callSign: number;
	customer: string;
	phoneNumber: number;
	user: string;
};

export type PhonesData = Phones & Universal;

type Roles = {
	customer: string;
	user: string;
	role: string[];
};

export type RolesData = Roles & Universal;
