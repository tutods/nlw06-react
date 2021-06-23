import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NewRoom from './NewRoom';
import Room from './Room';

const Rooms = () => {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={`${path}/new`} component={NewRoom} />

			<Route path={`${path}/:id`} component={Room} />
		</Switch>
	);
};

export default Rooms;
