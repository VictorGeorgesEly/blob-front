import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import DataGridComponent from '../../components/DataGridComponent';
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
				<h1>Factures</h1>
				<DataGridComponent
					data={this.props.invoices}
					columns={columns}
				/>
			</>
		);
	}
}
