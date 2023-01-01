import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SignIn from './pages/signIn';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Layout />} />
				<Route path="/connexion" element={<SignIn />} />
				{/* TODO Redirect each route to /connection if the user is not connected */}
			</Routes>
		</BrowserRouter>
	);
}
