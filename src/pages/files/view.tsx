import { Button, Grid } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import DataGridComponent from '../../components/DataGridComponent';
import { FileData } from '../../data/files/type';

const columns: GridColDef[] = [
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

type FilesViewProps = {
	files: FileData[];
	loading: boolean;
};

type FilesViewState = {};

export default class FilesView extends Component<
	FilesViewProps,
	FilesViewState
> {
	static defaultProps = {
		files: [],
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
						<h1>Dossiers</h1>
					</Grid>
					<Grid>
						<Button variant="contained" component={Link} to="add">
							Nouveau dossier
						</Button>
					</Grid>
				</Grid>
				<DataGridComponent data={this.props.files} columns={columns} />
			</>
		);
	}
}
