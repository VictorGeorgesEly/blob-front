import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Appointments from '../pages/appointments';
import Customers from '../pages/customers';
import Files from '../pages/files';
import AddFile from '../pages/files/addFile';
import File from '../pages/files/file';
import Home from '../pages/home';
import Invoices from '../pages/invoices';
import NotFound from '../pages/notFound';
import Profile from '../pages/profile';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
			}}
		>
			<Header />
			<Container component="main" sx={{ marginBottom: '24px' }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="/files" element={<Files />} />
					<Route path="/files/:id" element={<File />} />
					<Route path="/files/add" element={<AddFile />} />
					<Route path="/appointments" element={<Appointments />} />
					<Route path="/invoices" element={<Invoices />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	);
}
