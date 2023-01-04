import { CustomerData } from '../customers/type';
import { DocumentData } from '../documents/type';
import { Universal } from '../type';
import { UserData } from '../users/type';

type Invoice = {
	customer: string;
	date: Date;
	document: DocumentData;
	paid: boolean;
	price: number;
	user: string;
	expand: Expand;
};

type Expand = {
	customer: CustomerData;
	document: DocumentData;
	user: UserData;
};

export type InvoiceData = Invoice & Universal;
