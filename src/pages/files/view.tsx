import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Component } from 'react';
import { DataToolbar } from '../../components/DataToolbar';
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
						<Button variant="contained">Nouveau dossier</Button>
					</Grid>
				</Grid>
				<Box sx={{ height: '70vh', width: '100%' }}>
					<DataGrid
						rows={this.props.files}
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
