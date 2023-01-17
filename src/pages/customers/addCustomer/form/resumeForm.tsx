import { Grid, Typography } from '@mui/material';
import { CustomerForm } from '..';

type ResumeProps = {
	customer: CustomerForm;
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

export default ResumeForm;
