import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Snackbars from '../../components/Alert';
import DataGridComponent from '../../components/DataGridComponent';
import { InvoiceData } from '../../data/invoices/type';

const columns: GridColDef<InvoiceData>[] = [
	{
		field: 'user',
		headerName: 'Facturé par',
		flex: 1,
		valueGetter: (params: GridValueGetterParams<string, InvoiceData>) =>
			`${params.row.expand.user.first_name || ''} ${
				params.row.expand.user.last_name || ''
			}`,
	},
	{
		field: 'customer',
		headerName: 'Client',
		flex: 1,
		valueGetter: (params: GridValueGetterParams<string, InvoiceData>) =>
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

type Props = {
	invoices: InvoiceData[];
	loading: boolean;
	error: string;
};

const InvoicesView: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			{props.error && <Snackbars message={props.error} type="error" />}
			<h1>Factures</h1>
			<DataGridComponent
				data={props.invoices}
				columns={columns}
				loading={props.loading}
			/>
		</>
	);
};

export default InvoicesView;
