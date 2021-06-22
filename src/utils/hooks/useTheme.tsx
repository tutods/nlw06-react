import { useContext } from 'react';

import {
	ThemeModeContext,
	ThemeModeContextProps
} from 'contexts/ThemeModeContext';

export function useTheme(): ThemeModeContextProps {
	const context = useContext(ThemeModeContext);

	return context;
}
