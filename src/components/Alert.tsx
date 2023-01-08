import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
): JSX.Element {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type Props = {
	message: string;
	type: 'success' | 'error' | 'warning' | 'info';
};

export default function Snackbars({ message, type }: Props): JSX.Element {
	const [open, setOpen] = React.useState<boolean>(true);

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
		<Stack spacing={2} sx={{ width: '100%', position: 'absolute' }}>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
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
