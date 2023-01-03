import { Component } from 'react';
import { getCustomers } from '../../data/customers';
import { CustomerData } from '../../data/customers/type';
import CustomersView from './view';

type CustomersProps = {};

type CustomersState = {
	customers: CustomerData[];
	isLoading: boolean;
};

class Customers extends Component<CustomersProps, CustomersState> {
	state: CustomersState = {
		customers: [],
		isLoading: true,
	};

	componentDidMount() {
		this.getCustomers();
	}

	getCustomers = () => {
		this.setState({ isLoading: true });
		getCustomers().then((res) => {
			this.setState({ customers: res, isLoading: false });
		});
	};
	render() {
		return (
			<CustomersView
				customers={this.state.customers}
				loading={this.state.isLoading}
			/>
		);
	}
}

export default Customers;
