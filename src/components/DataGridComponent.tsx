import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, LinearProgress } from '@mui/material';
import { DataToolbar } from './DataToolbar';

type Props<T = any> = {
	data: T[];
	columns: GridColDef[];
	loading: boolean;
};

const DataGridComponent: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<Box sx={{ height: '70vh', width: '100%' }}>
			<DataGrid
				rows={props.data}
				columns={props.columns}
				checkboxSelection
				disableSelectionOnClick
				components={{
					Toolbar: DataToolbar,
					LoadingOverlay: LinearProgress,
				}}
				loading={props.loading}
			/>
		</Box>
	);
};

export default DataGridComponent;
