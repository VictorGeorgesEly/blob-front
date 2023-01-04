import { Component } from 'react';
import { getAppointments } from '../../data/appointments';
import { AppointmentData } from '../../data/appointments/type';
import AppointmentsView from './view';

type AppointmentsProps = {};

type AppointmentsState = {
	appointments: AppointmentData[];
	isLoading: boolean;
};

class Appointments extends Component<AppointmentsProps, AppointmentsState> {
	state: AppointmentsState = {
		appointments: [],
		isLoading: true,
	};

	componentDidMount() {
		this.getAppointments();
	}

	getAppointments = () => {
		this.setState({ isLoading: true });
		getAppointments().then((res) => {
			this.setState({ appointments: res, isLoading: false });
		});
	};
	render() {
		return (
			<AppointmentsView
				appointments={this.state.appointments}
				loading={this.state.isLoading}
			/>
		);
	}
}

export default Appointments;
