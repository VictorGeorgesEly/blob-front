import { Universal } from '../type';

type Appointment = {
	customer: string;
	date: Date;
	user: string;
};

export type AppointmentData = Appointment & Universal;
