import { Button, Grid } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Snackbars from '../../components/Alert';
import DataGridComponent from '../../components/DataGridComponent';
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
	{
		field: 'button',
		headerName: 'Button',
		flex: 1,
		renderCell: (params) => {
			return (
				<Button
					variant="outlined"
					color="secondary"
					component={Link}
					to={params.row.id}
				>
					Voir
				</Button>
			);
		},
	},
];

type Props = {
	customers: CustomerData[];
	loading: boolean;
	error: string;
};

const CustomersView: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			{props.error && <Snackbars message={props.error} type="error" />}
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Grid>
					<h1>Clients</h1>
				</Grid>
				<Grid>
					<Button variant="contained" component={Link} to="add">
						Nouveau client
					</Button>
				</Grid>
			</Grid>
			<DataGridComponent data={props.customers} columns={columns} />
		</>
	);
};

export default CustomersView;
