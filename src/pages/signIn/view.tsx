import {
	Avatar,
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Component } from 'react';
import { connect } from '../../data/auth';
import { Navigate } from 'react-router-dom';

type SignInProps = {};

type SignInState = {
	loading: boolean;
	username: string;
	password: string;
	error: unknown;
	isLogged: boolean;
};

export class SignInView extends Component<SignInProps, SignInState> {
	state: SignInState = {
		loading: false,
		username: '',
		password: '',
		error: '',
		isLogged: false,
	};

	handleConnect = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { username, password } = this.state;
		this.setState({ loading: true });
		try {
			const isLogged = await connect(username, password);
			this.setState({ isLogged });
		} catch (error) {
			// TODO
		}
	};

	change = (name: string, value: any) => {
		this.setState((state) => ({
			...state,
			[name]: value,
		}));
	};

	handleInput =
		(name: string) => (event: React.ChangeEvent<HTMLInputElement>) =>
			this.change(name, event.target.value);

	isLoginDisabled = () => {
		const { username, password } = this.state;
		return username !== '' && password !== '';
	};

	render() {
		return (
			<Grid container component="main" sx={{ height: '100vh' }}>
				{this.state.isLogged && <Navigate to="/" replace={true} />}
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							'url(https://source.unsplash.com/random)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={this.handleConnect}
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={this.handleInput('username')}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={this.handleInput('password')}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								disabled={!this.isLoginDisabled()}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<p>Forgot password?</p>
								</Grid>
								<Grid item>
									<p>{"Don't have an account? Sign Up"}</p>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		);
	}
}
