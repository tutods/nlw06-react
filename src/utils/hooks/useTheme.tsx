import {
	ThemeModeContext,
	ThemeModeContextProps
} from 'contexts/ThemeModeContext';
import { useContext } from 'react';

export const useTheme = (): ThemeModeContextProps => {
	const context = useContext(ThemeModeContext);

	return context;
};
