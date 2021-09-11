// import external modules
import React, { lazy } from 'react';
import { Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const createBrowserHistory = require('history').createBrowserHistory;
const LazyLogin = lazy(() => import('../views/pages/login'));
const LazyDashboard = lazy(() => import('../views/dashboard/dashboard'));
export const history = createBrowserHistory({ basename: '/' });
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path='/login' component={LazyLogin} exact={true} />
            <PublicRoute path='/dashboard' component={LazyDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  const isAuthenticated = state.login.loginFlag;
  const login_route = state.login.login_route;
  return { isAuthenticated, login_route };
};

export default connect(mapStateToProps, {})(AppRouter);
