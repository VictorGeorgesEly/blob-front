import { useState, useEffect } from 'react';
import { getAppointments } from '../../data/appointments';
import { AppointmentData } from '../../data/appointments/type';
import AppointmentsView from './view';

type Props = {};

const Appointments: React.FC<Props> = (): JSX.Element => {
	const [appointments, setAppointments] = useState<AppointmentData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setIsLoading(true);
		getAppointments()
			.then((res) => {
				setAppointments(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);

	return (
		<AppointmentsView
			appointments={appointments}
			loading={isLoading}
			error={error}
		/>
	);
};

export default Appointments;
