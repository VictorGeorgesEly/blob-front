import { useEffect, useState } from 'react';
import { getCustomers } from '../../data/customers';
import { CustomerData } from '../../data/customers/type';
import CustomersView from './view';

type Props = {};

const Customers: React.FC<Props> = (): JSX.Element => {
	const [customers, setCustomers] = useState<CustomerData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setIsLoading(true);
		getCustomers()
			.then((res) => {
				setCustomers(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);

	return (
		<CustomersView
			customers={customers}
			loading={isLoading}
			error={error}
		/>
	);
};

export default Customers;
