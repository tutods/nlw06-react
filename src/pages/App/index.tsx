import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Rooms from 'pages/Rooms';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={Home} exact />
        <Route path={'/rooms'} component={Rooms} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
