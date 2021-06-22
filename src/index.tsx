import { AuthContextProvider } from 'contexts/AuthContext';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/services/firebase';

ReactDOM.render(
	<ThemeModeProvider>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</ThemeModeProvider>,
	document.getElementById('root')
);
