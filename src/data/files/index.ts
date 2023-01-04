import { pb } from '../../config';
import { FileData } from './type';

export async function getFiles(): Promise<FileData[]> {
	const records = await pb.collection('files').getFullList<FileData>(200, {
		sort: '-created',
		expand: 'user,customer,document,invoice,appointment',
	});
	return records;
}
