import { useEffect, useState } from 'react';
import { getInvoices } from '../../data/invoices';
import { InvoiceData } from '../../data/invoices/type';
import InvoicesView from './view';

type Props = {};

const Invoices: React.FC<Props> = (): JSX.Element => {
	const [invoices, setInvoices] = useState<InvoiceData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		setIsLoading(true);
		getInvoices()
			.then((res) => {
				setInvoices(res);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);

	return (
		<InvoicesView invoices={invoices} loading={isLoading} error={error} />
	);
};

export default Invoices;
