import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { isLoggedIn } from './data/auth';
import SignIn from './pages/signIn';

type ProtectedRouteProps = {
	isAuthenticated: boolean;
	authenticationPath: string;
	outlet: JSX.Element;
};

function ProtectedRoute({
	isAuthenticated,
	authenticationPath,
	outlet,
}: ProtectedRouteProps): JSX.Element {
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} />;
	}
}

export default function Router(): JSX.Element {
	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
		isAuthenticated: isLoggedIn(),
		authenticationPath: '/login',
	};

	// TODO Outlet and loader ?
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<SignIn />} />
				<Route
					path="*"
					element={
						<ProtectedRoute
							{...defaultProtectedRouteProps}
							outlet={<Layout />}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
