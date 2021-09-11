// import external modules
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/storeConfig/store';
import { setLoginFlag, setLoginUser } from './redux/actions/login/loginAction';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from './components/spinner/spinner';

import { history } from './app/AppRouter';

const LazyApp = lazy(() => import('./app/AppRouter'));
const jsx = (
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <LazyApp />
    </Suspense>
  </Provider>
);

// renedr app
let hasRendered = false;
const renderApp = async () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<Spinner />, document.getElementById('root'));

// renderening login page

const renderLogin = () => {
  store.dispatch(setLoginFlag(false));
  renderApp();

  if (
    window.location.pathname === '/reset-password' ||
    window.location.pathname === '/reset-password/' ||
    window.location.pathname === '/verify' ||
    window.location.pathname === '/verify/'
  ) {
    history.push('/reset-password');
  } else {
    history.push('/login');
  }
};

// checking routes and then rendering after clearing local storage ehere we kept users information

try {
  if (
    window.location.pathname === '/reset-password' ||
    window.location.pathname === '/reset-password' ||
    window.location.pathname === '/verify' ||
    window.location.pathname === '/verify'
  ) {
    localStorage.removeItem('user');
    renderApp();
  }
  const login = localStorage.getItem('user');
  if (login) {
    const loginObject = JSON.parse(login);
    store.dispatch(setLoginUser(loginObject));
    store.dispatch(setLoginFlag(true));
    renderApp();
    if (window.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    // renderLogin() // commenting it as we required only dashboard to search sku data. Once Login api we get we can apply this for authorization
    renderApp();
    if (window.location.pathname === '/') {
      history.push('/dashboard');
    }
  }
} catch (e) {
  // renderLogin() // commenting it as we required only dashboard to search sku data. Once Login api we get we can apply this for authorization
  renderApp();
  if (window.location.pathname === '/') {
    history.push('/dashboard');
  }
}
