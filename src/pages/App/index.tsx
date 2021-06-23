import Home from 'pages/Home';
import Rooms from 'pages/Rooms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path={'/'} component={Home} exact />
				<Route path={'/rooms'} component={Rooms} />
			</Switch>
		</Router>
	);
};

export default App;
