import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { PureComponent } from 'react';

type HomeViewProps = {};

export class HomeView extends PureComponent<HomeViewProps> {
	render() {
		return (
			<>
				<h1>Home</h1>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Mes rendez-vous
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Mes tâches
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Mes revenus
									</Typography>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										TODO
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
}
