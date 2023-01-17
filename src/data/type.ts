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
	access_code: string;
	additional: string;
	city: string;
	country: string;
	customer: string;
	number: string;
	post_code: string;
	repetition_index: string;
	street: string;
	user: string;
};

export type AddressesData = Addresses & Universal;

type Phones = {
	call_sign: string;
	customer: string;
	phone_number: string;
	user: string;
};

export type PhonesData = Phones & Universal;

type Roles = {
	customer: string;
	user: string;
	role: string[];
};

export type RolesData = Roles & Universal;
