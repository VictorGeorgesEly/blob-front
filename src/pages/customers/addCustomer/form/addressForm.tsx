import { Grid, TextField, Typography } from '@mui/material';
import { CustomerForm } from '..';

type AddressProps = {
	addAddress: () => void;
	onChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRemove: (index: number) => () => void;
	customer: CustomerForm;
};

const AddressForm: React.FC<AddressProps> = (
	props: AddressProps,
): JSX.Element => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Adresses du client
			</Typography>
			{props.customer.expand['addresses(customer)'].map(
				(address, index) => (
					<Grid container spacing={4} key={index}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="number"
								label="Numéro de rue"
								name="number"
								type="text"
								autoFocus
								variant="standard"
								value={address.number}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="street"
								label="Nom de la rue"
								name="street"
								type="text"
								autoComplete="street-address"
								variant="standard"
								value={address.street}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="city"
								label="Ville"
								name="city"
								type="text"
								variant="standard"
								value={address.city}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="country"
								label="Pays"
								name="country"
								type="text"
								autoComplete="country-name"
								variant="standard"
								value={address.country}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="post_code"
								label="Code postal"
								name="post_code"
								type="text"
								autoComplete="postal-code"
								variant="standard"
								value={address.post_code}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="access_code"
								label="Code d'accès"
								name="access_code"
								type="text"
								variant="standard"
								value={address.access_code}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="additional"
								label="Additionnel"
								name="additional"
								type="text"
								variant="standard"
								value={address.additional}
								onChange={props.onChange(index)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="repetition_index"
								label="Répétition (bis, ter...)"
								name="repetition_index"
								type="text"
								variant="standard"
								value={address.repetition_index}
								onChange={props.onChange(index)}
							/>
						</Grid>
						{index !== 0 && (
							<button
								type="button"
								onClick={props.onRemove(index)}
							>
								Supprimer cette adresse
							</button>
						)}
					</Grid>
				),
			)}
			{props.customer.expand['addresses(customer)'][
				props.customer.expand['addresses(customer)'].length - 1
			].street &&
				props.customer.expand['addresses(customer)'][
					props.customer.expand['addresses(customer)'].length - 1
				].city &&
				props.customer.expand['addresses(customer)'][
					props.customer.expand['addresses(customer)'].length - 1
				].number &&
				props.customer.expand['addresses(customer)'][
					props.customer.expand['addresses(customer)'].length - 1
				].country && (
					<button type="button" onClick={props.addAddress}>
						Aiouter une adresse
					</button>
				)}
		</>
	);
};

export default AddressForm;
