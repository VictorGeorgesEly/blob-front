import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import { DataToolbar } from '../../components/DataToolbar';
import { CustomerData } from '../../data/customers/type';

const columns: GridColDef[] = [
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		flex: 1,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.first_name || ''} ${params.row.last_name || ''}`,
	},
	{
		field: 'email',
		headerName: 'Email',
		flex: 1,
	},
	{
		field: 'social_security',
		headerName: 'Sécurité sociale',
		flex: 1,
	},
	{
		field: 'added_by',
		headerName: 'Ajouté par',
		flex: 1,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.expand.added_by.username || ''}`,
	},
	{
		field: 'created',
		headerName: 'Created',
		flex: 1,
	},
];

type CustomersViewProps = {
	customers: CustomerData[];
	loading: boolean;
};

type CustomersViewState = {};

export default class CustomersView extends Component<
	CustomersViewProps,
	CustomersViewState
> {
	static defaultProps = {
		customers: [],
		loading: false,
	};

	render() {
		return (
			<>
				<h1>Clients</h1>
				<Box sx={{ height: '70vh', width: '100%' }}>
					<DataGrid
						rows={this.props.customers}
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
