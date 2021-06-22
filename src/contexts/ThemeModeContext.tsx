import GlobalStyles from 'assets/styles/global';
import { darkTheme } from 'assets/styles/theme/dark';
import { lightTheme } from 'assets/styles/theme/light';
import { createContext, ReactNode } from 'react';
import {
	DefaultTheme,
	ThemeProvider as ThemeStyledProvider
} from 'styled-components';
import { usePersistedState } from 'utils/hooks/usePersistedState';

export type ThemeModeContextProps = {
	theme: DefaultTheme;
	toggleTheme(): void;
};

type ThemeModeProviderProps = {
	children: ReactNode;
};

export const ThemeModeContext = createContext({} as ThemeModeContextProps);

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>(
		'theme',
		lightTheme
	);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? darkTheme : lightTheme);
	};

	return (
		<ThemeModeContext.Provider value={{ toggleTheme, theme }}>
			<ThemeStyledProvider theme={theme || lightTheme}>
				<GlobalStyles />
				{children}
			</ThemeStyledProvider>
		</ThemeModeContext.Provider>
	);
};
