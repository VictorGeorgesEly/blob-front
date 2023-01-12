import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

enum StepEnum {
	USER_DETAILS,
	ADDRESS_DETAILS,
	PHONE_DETAILS,
}

const steps = [
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
		default:
			throw new Error('Unknown step');
	}
}

function UserForm(): JSX.Element {
	return <h1>Informations du client</h1>;
}

function AddressForm(): JSX.Element {
	return <h1>Addresses du client</h1>;
}

function PhoneForm(): JSX.Element {
	return <h1>Téléphones du client</h1>;
}

export default function AddCustomer(): JSX.Element {
	const [activeStep, setActiveStep] = React.useState<number>(
		StepEnum.USER_DETAILS,
	);

	const handleNext = (): void => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
	};

	const handleBack = (): void => {
		setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
	};

	const handReset = (): void => {
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
			{activeStep === steps.length ? (
				<React.Fragment>
					<Typography variant="h5" gutterBottom>
						Thank you for your order.
					</Typography>
					<Typography variant="subtitle1">
						Your order number is #2001539. We have emailed your
						order confirmation, and will send you an update when
						your order has shipped.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button
							variant="contained"
							onClick={handReset}
							sx={{ mt: 3, ml: 1 }}
						>
							Ok
						</Button>
					</Box>
				</React.Fragment>
			) : (
				<React.Fragment>
					{getStepContent(activeStep)}
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						{activeStep !== StepEnum.USER_DETAILS && (
							<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
								Retour
							</Button>
						)}
						<Button
							variant="contained"
							onClick={handleNext}
							sx={{ mt: 3, ml: 1 }}
						>
							{activeStep === StepEnum.PHONE_DETAILS
								? 'Enregistrer le client'
								: 'Suivant'}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Paper>
	);
}
