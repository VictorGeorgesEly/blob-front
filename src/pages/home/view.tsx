import { Button } from '@mui/material';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

type HomeViewProps = {};

export class HomeView extends PureComponent<HomeViewProps> {
	render() {
		return (
			<>
				<h1>Home</h1>
				<Button component={Link} to="/connexion">
					Disconnect
				</Button>
			</>
		);
	}
}
