import { Component } from 'react';
import { getInvoices } from '../../data/invoices';
import { InvoiceData } from '../../data/invoices/type';
import InvoicesView from './view';

type InvoicesProps = {};

type InvoicesState = {
	invoices: InvoiceData[];
	isLoading: boolean;
};

class Invoices extends Component<InvoicesProps, InvoicesState> {
	state: InvoicesState = {
		invoices: [],
		isLoading: true,
	};

	componentDidMount() {
		this.getInvoices();
	}

	getInvoices = () => {
		this.setState({ isLoading: true });
		getInvoices().then((res) => {
			this.setState({ invoices: res, isLoading: false });
		});
	};
	render() {
		return (
			<InvoicesView
				invoices={this.state.invoices}
				loading={this.state.isLoading}
			/>
		);
	}
}

export default Invoices;
