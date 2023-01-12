import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

type Props = {};

const FileDetail: React.FC<Props> = (): JSX.Element => {
	return (
		<>
			<h1>Dossier</h1>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6} md={6}>
						<Card sx={{ minWidth: 275, height: '100%' }}>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									Informations
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card sx={{ minWidth: 275, height: '100%' }}>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									Factures
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card sx={{ minWidth: 275, height: '100%' }}>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									Documents
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card sx={{ minWidth: 275, height: '100%' }}>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="div"
								>
									Rendez-vous
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default FileDetail;
