import { CustomerData } from '../customers/type';
import { Universal } from '../type';
import { UserData } from '../users/type';

type Appointment = {
	customer: CustomerData;
	date: Date;
	user: UserData;
};

export type AppointmentData = Appointment & Universal;
