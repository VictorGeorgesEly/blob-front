import {
	createTheme,
	CssBaseline,
	PaletteMode,
	ThemeProvider,
	useMediaQuery,
} from '@mui/material';
import React from 'react';
import { MAIN_COLOR, SECONDARY_COLOR } from './colors';
import Router from './Router';

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: MAIN_COLOR,
					},
					secondary: {
						main: SECONDARY_COLOR,
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: MAIN_COLOR,
					},
					secondary: {
						main: SECONDARY_COLOR,
					},
					background: {
						default: '#303030',
						paper: '#424240',
					},
			  }),
	},
});

export default function Theme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = React.useMemo(
		() => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
		[prefersDarkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router />
		</ThemeProvider>
	);
}
