import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { DataToolbar } from './DataToolbar';

type Props<T = any> = {
	data: T[];
	columns: GridColDef[];
};

const DataGridComponent: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<Box sx={{ height: '70vh', width: '100%' }}>
			<DataGrid
				rows={props.data}
				columns={props.columns}
				checkboxSelection
				disableSelectionOnClick
				components={{ Toolbar: DataToolbar }}
			/>
		</Box>
	);
};

export default DataGridComponent;
