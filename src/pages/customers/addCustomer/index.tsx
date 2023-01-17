import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getId } from '../../../data/auth';
import UserForm from './form/userForm';
import AddressForm from './form/addressForm';
import PhoneForm from './form/phoneForm';
import ResumeForm from './form/resumeForm';

type Props = {};

export type CustomerForm = {
	addedBy: string;
	email: string;
	expand: ExpandForm;
	first_name: string;
	last_name: string;
	username: string;
	social_security: string;
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
	number: string;
	post_code: string;
	repetition_index: string;
	street: string;
};

type PhonesForm = {
	call_sign: string;
	phone_number: string;
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

const AddCustomer: React.FC<Props> = (): JSX.Element => {
	// TODO Add Loading + Error

	const [activeStep, setActiveStep] = React.useState<StepEnum>(
		StepEnum.USER_DETAILS,
	);

	const handleNext = (): void => {
		setActiveStep((prevActiveStep: StepEnum) => prevActiveStep + 1);
	};

	const handleBack = (): void => {
		setActiveStep((prevActiveStep: StepEnum) => prevActiveStep - 1);
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
					number: '',
					post_code: '',
					repetition_index: '',
					street: '',
				},
			],
			'phones(customer)': [{ call_sign: '', phone_number: '' }],
			'roles(customer)': {
				role: [],
			},
		},
		first_name: '',
		last_name: '',
		username: '',
		social_security: '',
	};

	const [customerForm, setCustomerForm] =
		React.useState<CustomerForm>(initialFormState);

	const [error, setError] = React.useState<string | null>(null);

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
							number: '',
							post_code: '',
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
			].phone_number;
		if (isValid) {
			setCustomerForm((prevState) => ({
				...prevState,
				expand: {
					...prevState.expand,
					'phones(customer)': [
						...prevState.expand['phones(customer)'],
						{ call_sign: '', phone_number: '' },
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
