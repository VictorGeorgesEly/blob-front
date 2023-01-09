import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Snackbars from '../../components/Alert';
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

type Props = {
	appointments: AppointmentData[];
	loading: boolean;
	error: string;
};

const AppointmentsView: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			{props.error && <Snackbars message={props.error} type="error" />}
			<h1>Rendez-vous</h1>
			<DataGridComponent
				data={props.appointments}
				columns={columns}
				loading={props.loading}
			/>
		</>
	);
};

export default AppointmentsView;
