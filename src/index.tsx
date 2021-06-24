import { AuthContextProvider } from 'contexts/AuthContext';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import App from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import 'utils/services/firebase';

ReactDOM.render(
	<ThemeModeProvider>
		<AuthContextProvider>
			{/* <RoomContextProvider> */}
			<Toaster position='top-right' reverseOrder={false} />
			<App />
			{/* </RoomContextProvider> */}
		</AuthContextProvider>
	</ThemeModeProvider>,
	document.getElementById('root')
);
