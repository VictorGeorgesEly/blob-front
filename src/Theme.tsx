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

const usePreferredColorScheme = () => {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
	return prefersDarkMode ? 'dark' : 'light';
};

const useTheme = () => {
	const preferredColorScheme = usePreferredColorScheme();
	const theme = React.useMemo(
		() => createTheme(getDesignTokens(preferredColorScheme)),
		[preferredColorScheme],
	);
	return theme;
};

export default function Theme() {
	const theme = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router />
		</ThemeProvider>
	);
}
