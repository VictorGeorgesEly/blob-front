import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Customers from '../pages/customers';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
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
			<Container component="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/customers" element={<Customers />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
			<br /> {/* TODO */}
			<Footer />
		</Box>
	);
}
