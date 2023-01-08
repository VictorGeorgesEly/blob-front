import { Component } from 'react';
import withRouter from '../../../components/withRouter';

type ViewCustomerProps = {
	params: {
		id: string;
	};
};

type ViewCustomerState = {};

class ViewCustomer extends Component<ViewCustomerProps, ViewCustomerState> {
	render() {
		return (
			<>
				<h1>Client</h1>
				<div>{this.props.params.id}</div>
			</>
		);
	}
}

export default withRouter(ViewCustomer);
