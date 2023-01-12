import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Snackbars from '../../../components/Alert';
import Progress from '../../../components/Progress';
import { getCustomerById } from '../../../data/customers';
import { CustomerData } from '../../../data/customers/type';

type Props = {};

const CustomerDetail: React.FC<Props> = (): JSX.Element => {
	const initialFormState: CustomerData = {
		id: '',
		username: '',
		first_name: '',
		last_name: '',
		email: '',
		addedBy: '',
		social_security: 0,
		emailVisibility: false,
		verified: false,
		collectionID: '',
		collectionName: '',
		created: new Date(),
		updated: new Date(),
	};
	const [customer, setCustomer] = useState<CustomerData>(initialFormState);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	const params = useParams<{ id: string }>() as { id: string };

	useEffect(() => {
		setIsLoading(true);
		getCustomerById(params.id)
			.then((res) => {
				setCustomer(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);
	return (
		<>
			{error && <Snackbars message={error} type="error" />}
			<h1>Client</h1>
			{isLoading ? (
				<Progress />
			) : (
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
									<p>{customer.first_name}</p>
									<p>{customer.last_name}</p>
									<p>{customer.addedBy}</p>
									<p>{customer.email}</p>
									<p>{customer.username}</p>
									<p>{customer.social_security}</p>
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
										Addresses
									</Typography>
									<List dense={true}>
										{customer.expand?.[
											'addresses(customer)'
										].map((address) => (
											<div key={address.id}>
												<ListItem>
													<ListItemText
														primary={address.city}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={
															address.country
														}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={address.number}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={
															address.post_code
														}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={address.street}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={
															address.additional
														}
													/>
												</ListItem>
												<Divider />
											</div>
										))}
									</List>
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
										Phones
									</Typography>
									<List dense={true}>
										{customer.expand?.[
											'phones(customer)'
										].map((phone) => (
											<div key={phone.id}>
												<ListItem>
													<ListItemText
														primary={
															phone.call_sign
														}
													/>
												</ListItem>
												<ListItem>
													<ListItemText
														primary={
															phone.phone_number
														}
													/>
												</ListItem>
												<Divider />
											</div>
										))}
									</List>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			)}
		</>
	);
};

export default CustomerDetail;
