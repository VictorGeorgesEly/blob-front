import { Component } from 'react';
import { SignInView } from './view';

type SignInProps = {};

type SignInState = {};

class SignIn extends Component<SignInProps, SignInState> {
	state: SignInState = {};

	render() {
		return <SignInView />;
	}
}

export default SignIn;
