import { ThemeModeContext } from 'contexts/ThemeModeContext';
import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { SwitchTheme } from './styles';

const ThemeSwitch = ({ ...props }) => {
	const { title } = useContext(ThemeContext);
	const { toggleTheme } = useContext(ThemeModeContext);

	const icon = title === 'light' ? <FiMoon /> : <FiSun />;

	return (
		<SwitchTheme {...props} onClick={() => toggleTheme()}>
			{icon}
		</SwitchTheme>
	);
};

export { ThemeSwitch };
