import { Grid, TextField, Typography } from '@mui/material';
import { CustomerForm } from '..';

type PhoneProps = {
	addPhone: () => void;
	onChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRemove: (index: number) => () => void;
	customer: CustomerForm;
};

const PhoneForm: React.FC<PhoneProps> = (props: PhoneProps): JSX.Element => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Téléphones du client
			</Typography>
			{props.customer.expand['phones(customer)'].map((phone, index) => (
				<Grid container spacing={4} key={index}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="call_sign"
							label="Indicatif"
							name="call_sign"
							type="text"
							autoComplete="tel-country-code"
							autoFocus
							variant="standard"
							value={phone.call_sign}
							onChange={props.onChange(index)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="phone_number"
							label="Numéro de téléphone"
							name="phone_number"
							type="text"
							autoComplete="tel"
							variant="standard"
							value={phone.phone_number}
							onChange={props.onChange(index)}
						/>
					</Grid>
					{index !== 0 && (
						<button type="button" onClick={props.onRemove(index)}>
							Supprimer ce téléphone
						</button>
					)}
				</Grid>
			))}
			{!!props.customer.expand['phones(customer)'][
				props.customer.expand['phones(customer)'].length - 1
			].phone_number && (
				<button type="button" onClick={props.addPhone}>
					Ajouter un téléphone
				</button>
			)}
		</>
	);
};

export default PhoneForm;
