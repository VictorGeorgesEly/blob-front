import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { isLoggedIn, logout } from './data/auth';
import SignIn from './pages/signIn';

export type ProtectedRouteProps = {
	isAuthenticated: boolean;
	authenticationPath: string;
	outlet: JSX.Element;
};

function ProtectedRoute({
	isAuthenticated,
	authenticationPath,
	outlet,
}: ProtectedRouteProps) {
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} replace />;
	}
}

export default function Router() {
	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
		isAuthenticated: !isLoggedIn,
		authenticationPath: '/login',
	};

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
