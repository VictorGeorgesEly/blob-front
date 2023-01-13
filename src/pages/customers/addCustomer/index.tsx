import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {};

type UserProps = {};

type AddressProps = {};

type PhoneProps = {};

type ResumeProps = {};

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

function getStepContent(step: number): JSX.Element {
	switch (step) {
		case StepEnum.USER_DETAILS:
			return <UserForm />;
		case StepEnum.ADDRESS_DETAILS:
			return <AddressForm />;
		case StepEnum.PHONE_DETAILS:
			return <PhoneForm />;
		case StepEnum.RESUME_DETAILS:
			return <ResumeForm />;
		default:
			throw new Error('Unknown step');
	}
}

const UserForm: React.FC<UserProps> = (): JSX.Element => {
	return <h1>Informations du client</h1>;
};

const AddressForm: React.FC<AddressProps> = (): JSX.Element => {
	return <h1>Addresses du client</h1>;
};

const PhoneForm: React.FC<PhoneProps> = (): JSX.Element => {
	return <h1>Téléphones du client</h1>;
};

const ResumeForm: React.FC<ResumeProps> = (): JSX.Element => {
	return <h1>Résumé avant enregistrement du client</h1>;
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

	const handleSubmit = (): void => {
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
			<Box component="form">
				{/* TODO */}
				{getStepContent(activeStep)}
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
								? handleSubmit
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
