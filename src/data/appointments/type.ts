import { CustomerData } from '../customers/type';
import { Universal } from '../type';
import { UserData } from '../users/type';

type Appointment = {
	customer: string;
	date: Date;
	user: string;
	expand: Expand;
};

type Expand = {
	customer: CustomerData;
	user: UserData;
};

export type AppointmentData = Appointment & Universal;
