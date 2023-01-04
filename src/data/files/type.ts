import { AppointmentData } from '../appointments/type';
import { CustomerData } from '../customers/type';
import { DocumentData } from '../documents/type';
import { InvoiceData } from '../invoices/type';
import { Universal } from '../type';
import { UserData } from '../users/type';

type File = {
	appointment: string;
	customer: string;
	document: string;
	expand: Expand;
	invoice: string;
	user: string;
};

type Expand = {
	appointment: AppointmentData;
	customer: CustomerData;
	document: DocumentData;
	invoice: InvoiceData;
	user: UserData;
};

export type FileData = File & Universal;
