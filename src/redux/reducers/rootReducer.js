// import external modules
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import LoaderReducer from './loader/loaderReducer';
import DashboardReducer from './dashboard/dashboardReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  loader: LoaderReducer,
  dashboard: DashboardReducer,
});

export default rootReducer;
