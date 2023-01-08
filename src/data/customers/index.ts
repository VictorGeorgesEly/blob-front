import { pb } from '../../config';
import { CustomerData } from './type';

export async function getCustomers(): Promise<CustomerData[]> {
	const records = await pb
		.collection('customers')
		.getFullList<CustomerData>(200, {
			sort: '-created',
			expand: 'added_by,phones(customer),addresses(customer),roles(customer)',
		});
	return records;
}

export async function getCustomerById(id: string): Promise<CustomerData> {
	const record = await pb.collection('customers').getOne<CustomerData>(id, {
		expand: 'added_by,phones(customer),addresses(customer),roles(customer)',
	});
	return record;
}
