import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getId } from '../../../data/auth';
import { Grid, TextField } from '@mui/material';

type Props = {};

type UserProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	customer: CustomerForm;
};

type AddressProps = {
	addAddress: () => void;
	onChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRemove: (index: number) => () => void;
	customer: CustomerForm;
};

type PhoneProps = {
	addPhone: () => void;
	onChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void;
	onRemove: (index: number) => () => void;
	customer: CustomerForm;
};

type ResumeProps = {
	customer: CustomerForm;
};

type CustomerForm = {
	addedBy: string;
	email: string;
	expand: ExpandForm;
	first_name: string;
	last_name: string;
	username: string;
	social_security: number;
};

type ExpandForm = {
	'addresses(customer)': AddressesForm[];
	'phones(customer)': PhonesForm[];
	'roles(customer)': RolesForm;
};

type AddressesForm = {
	access_code: string;
	additional: string;
	city: string;
	country: string;
	number: number;
	post_code: number;
	repetition_index: string;
	street: string;
};

type PhonesForm = {
	call_sign: number;
	phone_number: number;
};

type RolesForm = {
	role: string[];
};

enum StepEnum {
	USER_DETAILS,
	ADDRESS_DETAILS,
	PHONE_DETAILS,
	RESUME_DETAILS,
}

const steps: string[] = [
	'Informations du client',
	'Addresse du client',
	'Téléphone du client',
];

function getStepContent(
	step: number,
	_addAddress: () => void,
	_addPhone: () => void,
	_handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	_handleAddressChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	_handlePhoneChange: (
		index: number,
	) => (event: React.ChangeEvent<HTMLInputElement>) => void,
	_removeAddress: (index: number) => () => void,
	_removePhone: (index: number) => () => void,
	customerForm: CustomerForm,
): JSX.Element {
	switch (step) {
		case StepEnum.USER_DETAILS:
			return (
				<UserForm customer={customerForm} onChange={_handleChange} />
			);
		case StepEnum.ADDRESS_DETAILS:
			return (
				<AddressForm
					customer={customerForm}
					addAddress={_addAddress}
					onChange={_handleAddressChange}
					onRemove={_removeAddress}
				/>
			);
		case StepEnum.PHONE_DETAILS:
			return (
				<PhoneForm
					customer={customerForm}
					addPhone={_addPhone}
					onChange={_handlePhoneChange}
					onRemove={_removePhone}
				/>
			);
		case StepEnum.RESUME_DETAILS:
			return <ResumeForm customer={customerForm} />;
		default:
			throw new Error('Unknown step');
	}
}

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
						autoComplete="first_name"
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
						autoComplete="last_name"
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
						type="text"
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
						autoComplete="social_security"
						variant="standard"
						value={props.customer.social_security}
						onChange={props.onChange}
					/>
				</Grid>
			</Grid>
		</>
	);
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
								autoComplete="number"
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
								autoComplete="street"
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
								autoComplete="city"
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
								autoComplete="country"
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
								autoComplete="post_code"
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
								autoComplete="access_code"
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
								autoComplete="additional"
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
								autoComplete="repetition_index"
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
							autoComplete="call_sign"
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
							autoComplete="phone_number"
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

const ResumeForm: React.FC<ResumeProps> = (props: ResumeProps): JSX.Element => {
	return (
		<>
			<Typography variant="h6" gutterBottom>
				Résumé du client
			</Typography>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={6}>
					<p>{props.customer.first_name}</p>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p>{props.customer.last_name}</p>
				</Grid>
				<Grid item xs={12}>
					<p>{props.customer.email}</p>
				</Grid>
				<Grid item xs={12}>
					<p>{props.customer.social_security}</p>
				</Grid>
			</Grid>
		</>
	);
};

const AddCustomer: React.FC<Props> = (): JSX.Element => {
	// TODO Add Loading + Error

	const [activeStep, setActiveStep] = React.useState<number>(
		StepEnum.USER_DETAILS,
	);

	const handleNext = (): void => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
	};

	const handleBack = (): void => {
		setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
	};

	const initialFormState: CustomerForm = {
		addedBy: getId(),
		email: '',
		expand: {
			'addresses(customer)': [
				{
					access_code: '',
					additional: '',
					city: '',
					country: '',
					number: 0,
					post_code: 0,
					repetition_index: '',
					street: '',
				},
			],
			'phones(customer)': [{ call_sign: 0, phone_number: 0 }],
			'roles(customer)': {
				role: [],
			},
		},
		first_name: '',
		last_name: '',
		username: '',
		social_security: 0,
	};

	const [customerForm, setCustomerForm] =
		React.useState<CustomerForm>(initialFormState);

	const handleChange = React.useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			const { name, value } = event.target;
			setCustomerForm((prevState) => ({ ...prevState, [name]: value }));
		},
		[setCustomerForm],
	);

	const handleAddressChange = React.useCallback(
		(index: number) =>
			(event: React.ChangeEvent<HTMLInputElement>): void => {
				const newAddresses = [
					...customerForm.expand['addresses(customer)'],
				];
				newAddresses[index] = {
					...newAddresses[index],
					[event.target.name]: event.target.value,
				};
				setCustomerForm((prevState) => ({
					...prevState,
					expand: {
						...prevState.expand,
						'addresses(customer)': newAddresses,
					},
				}));
			},
		[customerForm.expand['addresses(customer)'], setCustomerForm],
	);

	const addAddress = React.useCallback((): void => {
		const isValid =
			customerForm.expand['addresses(customer)'][
				customerForm.expand['addresses(customer)'].length - 1
			].street &&
			customerForm.expand['addresses(customer)'][
				customerForm.expand['addresses(customer)'].length - 1
			].city &&
			customerForm.expand['addresses(customer)'][
				customerForm.expand['addresses(customer)'].length - 1
			].number &&
			customerForm.expand['addresses(customer)'][
				customerForm.expand['addresses(customer)'].length - 1
			].country;
		if (isValid) {
			setCustomerForm((prevState) => ({
				...prevState,
				expand: {
					...prevState.expand,
					'addresses(customer)': [
						...prevState.expand['addresses(customer)'],
						{
							access_code: '',
							additional: '',
							city: '',
							country: '',
							number: 0,
							post_code: 0,
							repetition_index: '',
							street: '',
						},
					],
				},
			}));
		}
	}, [customerForm.expand['addresses(customer)'], setCustomerForm]);

	const removeAddress = React.useCallback(
		(index: number) => (): void => {
			if (index === 0) {
				return;
			}
			const newAddresses = [
				...customerForm.expand['addresses(customer)'],
			];
			newAddresses.splice(index, 1);
			setCustomerForm((prevState) => ({
				...prevState,
				expand: {
					...prevState.expand,
					'addresses(customer)': newAddresses,
				},
			}));
		},
		[customerForm.expand['addresses(customer)'], setCustomerForm],
	);

	const handlePhoneChange = React.useCallback(
		(index: number) =>
			(event: React.ChangeEvent<HTMLInputElement>): void => {
				const newPhones = [...customerForm.expand['phones(customer)']];
				newPhones[index] = {
					...newPhones[index],
					[event.target.name]: event.target.value,
				};
				setCustomerForm((prevState) => ({
					...prevState,
					expand: {
						...prevState.expand,
						'phones(customer)': newPhones,
					},
				}));
			},
		[customerForm.expand['phones(customer)'], setCustomerForm],
	);

	const addPhone = React.useCallback((): void => {
		const isValid =
			customerForm.expand['phones(customer)'][
				customerForm.expand['phones(customer)'].length - 1
			].phone_number !== 0;
		if (isValid) {
			setCustomerForm((prevState) => ({
				...prevState,
				expand: {
					...prevState.expand,
					'phones(customer)': [
						...prevState.expand['phones(customer)'],
						{ call_sign: 0, phone_number: 0 },
					],
				},
			}));
		}
	}, [customerForm.expand['phones(customer)'], setCustomerForm]);

	const removePhone = React.useCallback(
		(index: number) => (): void => {
			if (index === 0) {
				return;
			}
			const newPhones = [...customerForm.expand['phones(customer)']];
			newPhones.splice(index, 1);
			setCustomerForm((prevState) => ({
				...prevState,
				expand: {
					...prevState.expand,
					'phones(customer)': newPhones,
				},
			}));
		},
		[customerForm.expand['phones(customer)'], setCustomerForm],
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// TODO
		setActiveStep(StepEnum.USER_DETAILS);

		// Perform validation
		/*const isValid =
			formState.firstName !== '' &&
			formState.addresses.every(
				(address) =>
					address.street !== '' &&
					address.city !== '' &&
					address.state !== '' &&
					address.zip !== '',
			) &&
			formState.phones.every((phone) => phone.phone !== 0);

		if (isValid) {
			// Send form data to server or perform other actions
			console.log(formState);
		} else {
			// Display error messages or highlight invalid fields
		}*/
	};

	const handleSubmitTest = (): void => {
		setActiveStep(StepEnum.USER_DETAILS);
	};

	return (
		<Paper
			variant="outlined"
			sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
		>
			<Typography component="h1" variant="h4" align="center">
				Enregistrement d&apos;un nouveau client
			</Typography>
			<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Box component="form" onSubmit={handleSubmit}>
				{getStepContent(
					activeStep,
					addAddress,
					addPhone,
					handleChange,
					handleAddressChange,
					handlePhoneChange,
					removeAddress,
					removePhone,
					customerForm,
				)}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
					}}
				>
					{activeStep !== StepEnum.USER_DETAILS && (
						<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
							Retour
						</Button>
					)}
					<Button
						variant="contained"
						onClick={
							activeStep === StepEnum.RESUME_DETAILS
								? handleSubmitTest
								: handleNext
						}
						sx={{ mt: 3, ml: 1 }}
					>
						{activeStep === StepEnum.RESUME_DETAILS
							? 'Enregistrer le client'
							: 'Suivant'}
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};

export default AddCustomer;
