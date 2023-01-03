import { Component } from 'react';

type CustomersProps = {};

type CustomersState = {
	customers: []; // TODO
	isLoading: boolean;
};

class Customers extends Component<CustomersProps, CustomersState> {
	render() {
		return <h1>Clients</h1>;
	}
}

export default Customers;
