import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import { DataToolbar } from '../../components/DataToolbar';
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
		flex: 0.75,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.expand.user.first_name || ''} ${
				params.row.expand.user.last_name || ''
			}`,
	},
	{
		field: 'customer',
		headerName: 'Client',
		flex: 0.75,
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
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Grid>
						<h1>Rendez-vous</h1>
					</Grid>
					<Grid>
						<Button variant="contained">Nouveau rendez-vous</Button>
					</Grid>
				</Grid>
				<Box sx={{ height: '70vh', width: '100%' }}>
					<DataGrid
						rows={this.props.appointments}
						columns={columns}
						checkboxSelection
						disableSelectionOnClick
						components={{ Toolbar: DataToolbar }}
					/>
				</Box>
			</>
		);
	}
}