import { Box } from '@mui/material';
import { GridToolbar, GridToolbarQuickFilter } from '@mui/x-data-grid';

export function DataToolbar(): JSX.Element {
	return (
		<Box
			sx={{
				p: 1,
				pb: 0,
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<GridToolbar />
			<GridToolbarQuickFilter />
		</Box>
	);
}
