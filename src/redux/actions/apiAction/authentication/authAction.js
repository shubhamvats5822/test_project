import { setLoginUser, setLoginFlag } from '../../login/loginAction';
import { setloader } from '../../loader/loaderAction';

import { api } from '../../../../api/api';
import { history } from '../../../../app/AppRouter';

// This is just for reference for login and user data management
export const loginApi = (value) => {
  return async (dispatch, store) => {
    dispatch(setloader(true));
    await api('login', value, 'postWithoutToken')
      .then((res) => {
        if (res.status === 400) {
          console.log('error');
        } else {
          dispatch(setLoginUser(res.data.data));
          localStorage.setItem('user', JSON.stringify(res.data.data));
          dispatch(setLoginFlag(true));
          dispatch(setLoginFlag(true));
          history.push('/dashboard');
        }
        dispatch(setloader(false));
      })
      .catch((err) => {
        console.log('You are not able to login!');
      });
  };
};
