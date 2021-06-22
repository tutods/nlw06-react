import AuthPages from 'pages/AuthPages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path={'/'} component={AuthPages} />
			</Switch>
		</Router>
	);
};

export default App;
