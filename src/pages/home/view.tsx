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
import { MAIN_COLOR, SECONDARY_COLOR } from '../../colors';

type Props = {};

const data = [
	{
		name: 'Janvier',
		uv: 4000,
		pv: 2400,
	},
	{
		name: 'Février',
		uv: 3000,
		pv: 1398,
	},
	{
		name: 'Mars',
		uv: 2000,
		pv: 9800,
	},
	{
		name: 'Avril',
		uv: 2780,
		pv: 3908,
	},
	{
		name: 'Mai',
		uv: 1890,
		pv: 4800,
	},
	{
		name: 'Juin',
		uv: 2390,
		pv: 3800,
	},
	{
		name: 'Juillet',
		uv: 3490,
		pv: 4300,
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

const HomeView: React.FC<Props> = (): JSX.Element => {
	return (
		<>
			<h1>Accueil</h1>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={6}>
						<Card sx={{ minWidth: 275, height: '100%' }}>
							<CardActionArea component={Link} to="/appointments">
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
										Mes factures
									</Typography>
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
									</List>
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
								<ResponsiveContainer width="100%" height={320}>
									<LineChart
										width={500}
										height={320}
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
										<Tooltip
											wrapperStyle={{
												color: 'black',
											}}
										/>
										<Legend />
										<Line
											type="monotone"
											dataKey="pv"
											stroke={MAIN_COLOR} //"#8884d8"
											activeDot={{ r: 8 }}
										/>
										<Line
											type="monotone"
											dataKey="uv"
											stroke={SECONDARY_COLOR} //"#82ca9d"
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
};

export default HomeView;
