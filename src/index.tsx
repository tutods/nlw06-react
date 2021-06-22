import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/services/firebase';

ReactDOM.render(
	<ThemeModeProvider>
		<App />
	</ThemeModeProvider>,
	document.getElementById('root')
);
