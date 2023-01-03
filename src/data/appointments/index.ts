import { pb } from '../../config';
import { AppointmentData } from './type';

export async function getAppointments(): Promise<AppointmentData[]> {
	const records = await pb
		.collection('appointments')
		.getFullList<AppointmentData>(200, {
			sort: '-created',
		});
	return records;
}
