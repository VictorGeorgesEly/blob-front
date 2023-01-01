import { Component } from 'react';
import { HomeView } from './view';

type HomeProps = {};

type HomeState = {};

class Home extends Component<HomeProps, HomeState> {
	render() {
		return <HomeView />;
	}
}

export default Home;
