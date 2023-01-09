import { Button, Grid } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Snackbars from '../../components/Alert';
import DataGridComponent from '../../components/DataGridComponent';
import { FileData } from '../../data/files/type';

const columns: GridColDef<FileData>[] = [
	{
		field: 'user',
		headerName: 'Utilisateur',
		flex: 1,
		valueGetter: (params: GridValueGetterParams<string, FileData>) =>
			`${params.row.expand.user.first_name || ''} ${
				params.row.expand.user.last_name || ''
			}`,
	},
	{
		field: 'customer',
		headerName: 'Client',
		flex: 1,
		valueGetter: (params: GridValueGetterParams<string, FileData>) =>
			`${params.row.expand.customer.first_name || ''} ${
				params.row.expand.customer.last_name || ''
			}`,
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
	files: FileData[];
	loading: boolean;
	error: string;
};

const FilesView: React.FC<Props> = (props: Props): JSX.Element => {
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
					<h1>Dossiers</h1>
				</Grid>
				<Grid>
					<Button variant="contained" component={Link} to="add">
						Nouveau dossier
					</Button>
				</Grid>
			</Grid>
			<DataGridComponent
				data={props.files}
				columns={columns}
				loading={props.loading}
			/>
		</>
	);
};

export default FilesView;
