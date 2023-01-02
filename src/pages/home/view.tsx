import {
	Card,
	CardActionArea,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { PureComponent } from 'react';

type HomeViewProps = {};

export class HomeView extends PureComponent<HomeViewProps> {
	render() {
		return (
			<>
				<h1>Accueil</h1>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardActionArea>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											Mes rendez-vous
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											Lizards are a widespread group of
											squamate reptiles, with over 6,000
											species, ranging across all
											continents except Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardActionArea>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											Mes tâches
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											Lizards are a widespread group of
											squamate reptiles, with over 6,000
											species, ranging across all
											continents except Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardActionArea>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											Mes revenus
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											Lizards are a widespread group of
											squamate reptiles, with over 6,000
											species, ranging across all
											continents except Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, minHeight: '33vh' }}>
								<CardActionArea>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											TODO
										</Typography>
										<Typography
											variant="body2"
											color="text.secondary"
										>
											Lizards are a widespread group of
											squamate reptiles, with over 6,000
											species, ranging across all
											continents except Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
}
