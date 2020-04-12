import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { DummyPage } from '../common/DummyPage';
import { LandingPage } from '../common/LandingPage';
import { NotFoundPage } from '../common/NotFoundPage';
import { AuthGuardedRoute } from '../features/signin/AuthGuardedRoute';
import { LoginPage } from '../features/signin/LoginPage';

function App() {
  return (
    <div className="App">
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dummy">Dummy</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <AuthGuardedRoute exact path={['/', '/index.html']}>
          <LandingPage />
        </AuthGuardedRoute>
        <AuthGuardedRoute path={['/dummy', '/wtfk']}>
          <DummyPage />
        </AuthGuardedRoute>
        <AuthGuardedRoute path="/login">
          <LoginPage />
        </AuthGuardedRoute>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
