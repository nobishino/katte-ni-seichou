import { ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './components/presentational/pages/index';
import Member from './components/presentational/pages/member';

const App = (): ReactElement => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/member" component={Member} />

    <Redirect to="/" />
  </Switch>
);

export default App;
