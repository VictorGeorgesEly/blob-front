import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props = {
	message: string;
	type: 'success' | 'error' | 'warning' | 'info';
};

export default function Snackbars({ message, type }: Props) {
	const [open, setOpen] = React.useState(true);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<Alert
					onClose={handleClose}
					severity={type}
					sx={{ width: '100%' }}
				>
					{message}
				</Alert>
			</Snackbar>
		</Stack>
	);
}
