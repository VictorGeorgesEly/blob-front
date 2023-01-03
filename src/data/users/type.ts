import { Universal } from '../type';

type User = {
	email: string;
	emailVisibility: boolean;
	expand?: any; // TODO
	firstName: string;
	lastName: string;
	username: string;
	verified: boolean;
	avatar: string;
	birthday: Date;
};

export type UserData = User & Universal;
