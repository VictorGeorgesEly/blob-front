import { pb } from '../../config';
import { InvoiceData } from './type';

export async function getInvoices(): Promise<InvoiceData[]> {
	const records = await pb
		.collection('invoices')
		.getFullList<InvoiceData>(200, {
			sort: '-date',
			expand: 'user,customer,document',
		});
	return records;
}
