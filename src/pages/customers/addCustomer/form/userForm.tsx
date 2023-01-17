import { Grid, TextField, Typography } from '@mui/material';
import { CustomerForm } from '..';

type UserProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	customer: CustomerForm;
};

const UserForm: React.FC<UserProps> = (props: UserProps): JSX.Element => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Informations du client
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						id="first_name"
						label="Prénom"
						name="first_name"
						type="text"
						autoComplete="given-name"
						autoFocus
						variant="standard"
						value={props.customer.first_name}
						onChange={props.onChange}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						id="last_name"
						label="Nom"
						name="last_name"
						type="text"
						autoComplete="family-name"
						variant="standard"
						value={props.customer.last_name}
						onChange={props.onChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="email"
						label="Mail"
						name="email"
						type="email"
						autoComplete="email"
						variant="standard"
						value={props.customer.email}
						onChange={props.onChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="social_security"
						label="Numéro de sécurité social"
						name="social_security"
						type="text"
						variant="standard"
						value={props.customer.social_security}
						onChange={props.onChange}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default UserForm;
