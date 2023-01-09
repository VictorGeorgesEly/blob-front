import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Snackbars from '../../../components/Alert';
import Progress from '../../../components/Progress';
import { getCustomerById } from '../../../data/customers';
import { CustomerData } from '../../../data/customers/type';

type Props = {};

const CustomerDetail: React.FC<Props> = (): JSX.Element => {
	const [customer, setCustomer] = useState<CustomerData | null>(null); // TODO
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
				<>
					<p>{customer?.id}</p>
					<p>{customer?.addedBy}</p>
					<p>{customer?.email}</p>
					<p>{customer?.username}</p>
					<p>{customer?.last_name}</p>
					<p>{customer?.first_name}</p>
				</>
			)}
		</>
	);
};

export default CustomerDetail;
