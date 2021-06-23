import { AuthContextProvider } from 'contexts/AuthContext';
import { RoomContextProvider } from 'contexts/RoomContext';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import 'utils/services/firebase';

ReactDOM.render(
	<ThemeModeProvider>
		<AuthContextProvider>
			<RoomContextProvider>
				<App />
			</RoomContextProvider>
		</AuthContextProvider>
	</ThemeModeProvider>,
	document.getElementById('root')
);
