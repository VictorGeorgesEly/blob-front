import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

enum StepEnum {
	SHIPPING_ADDRESS,
	PAYMENT_DETAILS,
	REVIEW,
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
	switch (step) {
		case StepEnum.SHIPPING_ADDRESS:
			return <AddressForm />;
		case StepEnum.PAYMENT_DETAILS:
			return <PaymentForm />;
		case StepEnum.REVIEW:
			return <Review />;
		default:
			throw new Error('Unknown step');
	}
}

function AddressForm() {
	return <h1>AddressForm</h1>;
}

function PaymentForm() {
	return <h1>PaymentForm</h1>;
}

function Review() {
	return <h1>Review</h1>;
}

export default function AddCustomer() {
	const [activeStep, setActiveStep] = React.useState(
		StepEnum.SHIPPING_ADDRESS,
	);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<Paper
			variant="outlined"
			sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
		>
			<Typography component="h1" variant="h4" align="center">
				Checkout
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
				</React.Fragment>
			) : (
				<React.Fragment>
					{getStepContent(activeStep)}
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						{activeStep !== StepEnum.SHIPPING_ADDRESS && (
							<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
								Back
							</Button>
						)}
						<Button
							variant="contained"
							onClick={handleNext}
							sx={{ mt: 3, ml: 1 }}
						>
							{activeStep === StepEnum.REVIEW - 1
								? 'Place order'
								: 'Next'}
						</Button>
					</Box>
				</React.Fragment>
			)}
		</Paper>
	);
}
