import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import { DataToolbar } from '../../components/DataToolbar';
import { InvoiceData } from '../../data/invoices/type';

const columns: GridColDef[] = [
	{
		field: 'user',
		headerName: 'Facturé par',
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
	{
		field: 'date',
		headerName: 'Date',
		flex: 1,
	},
	{
		field: 'price',
		headerName: 'Prix',
		flex: 1,
	},
	{
		field: 'paid',
		headerName: 'Payé ?',
		flex: 1,
	},
];

type InvoicesViewProps = {
	invoices: InvoiceData[];
	loading: boolean;
};

type InvoicesViewState = {};

export default class InvoicesView extends Component<
	InvoicesViewProps,
	InvoicesViewState
> {
	static defaultProps = {
		invoices: [],
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
						<h1>Factures</h1>
					</Grid>
					<Grid>
						<Button variant="contained">Nouvelle facture</Button>
					</Grid>
				</Grid>
				<Box sx={{ height: '70vh', width: '100%' }}>
					<DataGrid
						rows={this.props.invoices}
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
