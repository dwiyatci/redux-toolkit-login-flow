import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { Error } from '../../common/Error';
import { Loading } from '../../common/Loading';
import { checkAuth, logout, selectSignin } from './signinSlice';

export function AuthGuardedRoute({ children, ...rest }) {
  const { loading, loggedIn, error } = useSelector(selectSignin);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {error && <Error message={error.message} />}
      <Route {...rest} render={({ location }) => renderRoutedComponent(location)} />
    </>
  );

  function renderRoutedComponent(location) {
    const isLoginPagePathname = location.pathname.includes('login');

    if (loggedIn) {
      if (isLoginPagePathname) {
        const { from } = location.state || { from: { pathname: '/' } };

        return (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from },
            }}
          />
        );
      }

      return (
        <>
          {children}
          <button
            onClick={async () => {
              await dispatch(logout());
              history.push('/');
            }}
          >
            Log Out
          </button>
        </>
      );
    } else {
      if (isLoginPagePathname) {
        return children;
      }

      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      );
    }
  }
}
