import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import DataGridComponent from '../../components/DataGridComponent';
import { AppointmentData } from '../../data/appointments/type';

const columns: GridColDef[] = [
	{
		field: 'date',
		headerName: 'Date',
		flex: 1,
	},
	{
		field: 'user',
		headerName: 'Utilisateur',
		flex: 1,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.expand.user.first_name || ''} ${
				params.row.expand.user.last_name || ''
			}`,
	},
	{
		field: 'customer',
		headerName: 'Client',
		flex: 1,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.expand.customer.first_name || ''} ${
				params.row.expand.customer.last_name || ''
			}`,
	},
];

type AppointmentsViewProps = {
	appointments: AppointmentData[];
	loading: boolean;
};

type AppointmentsViewState = {};

export default class AppointmentsView extends Component<
	AppointmentsViewProps,
	AppointmentsViewState
> {
	static defaultProps = {
		appointments: [],
		loading: false,
	};

	render() {
		return (
			<>
				<h1>Rendez-vous</h1>
				<DataGridComponent
					data={this.props.appointments}
					columns={columns}
				/>
			</>
		);
	}
}
