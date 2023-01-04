import { CustomerData } from '../customers/type';
import { Universal } from '../type';
import { UserData } from '../users/type';

type Document = {
	customer: string;
	document: string;
	user: string;
	expand: Expand;
};

type Expand = {
	user: UserData;
	customer: CustomerData;
};

export type DocumentData = Document & Universal;
