import {
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

type HomeViewProps = {};

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

function RowList() {
	return (
		<List dense={true}>
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText primary="Texte de description pour la liste" />
			</ListItem>
		</List>
	);
}

export class HomeView extends PureComponent<HomeViewProps> {
	render() {
		return (
			<>
				<h1>Accueil</h1>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, height: '100%' }}>
								<CardActionArea
									component={Link}
									to="/appointments"
								>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											Mes rendez-vous
										</Typography>
										<RowList />
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card sx={{ minWidth: 275, height: '100%' }}>
								<CardActionArea>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
										>
											Mon agenda
										</Typography>
										<RowList />
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={12}>
							<Card sx={{ minWidth: 275, height: '100%' }}>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Mes revenus
									</Typography>
									<ResponsiveContainer
										width="100%"
										height={320}
									>
										<LineChart
											width={500}
											height={300}
											data={data}
											margin={{
												top: 5,
												right: 30,
												left: 20,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="name" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Line
												type="monotone"
												dataKey="pv"
												stroke="#8884d8"
												activeDot={{ r: 8 }}
											/>
											<Line
												type="monotone"
												dataKey="uv"
												stroke="#82ca9d"
											/>
										</LineChart>
									</ResponsiveContainer>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
}
