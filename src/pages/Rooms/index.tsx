import NotFound from 'pages/NotFound';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdminRoom from './AdminRoom';
import NewRoom from './NewRoom';
import Room from './Room';

const Rooms = () => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/new`} component={NewRoom} />

      <Route path={`${path}/admin/:id`} component={AdminRoom} />

      <Route path={`${path}/:id`} component={Room} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Rooms;
