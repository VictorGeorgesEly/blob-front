import {
	Avatar,
	Box,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isLoggedIn, login } from '../../data/auth';
import { ConnectionData } from '../../data/auth/type';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Progress from '../../components/Progress';
import Snackbars from '../../components/Alert';

function SignIn(): JSX.Element {
	const [formData, setFormData] = useState<ConnectionData>({
		identity: '',
		password: '',
	});
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const isDisabled = (): boolean => !formData.identity || !formData.password;

	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (isDisabled()) {
			setError('Veuillez remplir tous les champs');
			return;
		}
		setLoading(true);
		try {
			const response = await login(formData); // Appelez la fonction `login`
			if (response.error) {
				setError(response.error);
			} else {
				navigate('../', { replace: true });
				navigate(0); // TODO https://stackoverflow.com/questions/68825965/react-router-v6-usenavigate-doesnt-navigate-if-replacing-last-element-in-path
			}
			setLoading(false);
		} catch (error) {
			setError('Erreur lors de la connexion au serveur');
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData: ConnectionData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			{error && <Snackbars message={error} type="error" />}
			{isLoggedIn() && <Navigate to="/" replace />}
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(https://source.unsplash.com/random)',
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
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="identity"
							label="Email Address"
							name="identity"
							autoComplete="identity"
							autoFocus
							value={formData.identity}
							onChange={handleChange}
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
							value={formData.password}
							onChange={handleChange}
						/>
						{loading ? (
							<Progress />
						) : (
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
								disabled={isDisabled()}
							>
								Sign In
							</Button>
						)}
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

export default SignIn;
